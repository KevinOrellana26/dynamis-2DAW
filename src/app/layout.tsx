import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import UserNavbar from "./(main)/_components/UserNavbar";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import AdminNavbar from "./(admin)/_components/AdminNavbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dýnamis",
    default: "Dýnamis",
  },
  icons: "/icons/dumbbell.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <body className="font-body" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header>
            {session?.role === "ADMIN" && <AdminNavbar />}
            {session?.role === "USER" && <UserNavbar />}
          </Header>
          {/* <ServerNavbar /> */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
