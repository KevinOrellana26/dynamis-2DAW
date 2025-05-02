import GuestNavbar from "@/components/GuestNavbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AdminNavbar from "./(admin)/_components/AdminNavbar";
import UserNavbar from "./(main)/_components/UserNavbar";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import ServerNavbar from "@/components/ServerNavbar";

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
          <ServerNavbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
