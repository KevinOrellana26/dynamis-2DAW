import AuthProvider from "@/components/auth-provider";
import GuestNavbar from "@/components/GuestNavbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AdminNavbar from "./(admin)/_components/AdminNavbar";
import { auth } from "./(auth)/_core/auth/auth.lib";
import UserNavbar from "./(main)/_components/UserNavbar";

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
  const session = await auth();

  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <body className="font-body" suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <>
              {session?.user.role === "ADMIN" ? (
                <AdminNavbar />
              ) : session?.user.role === "USER" ? (
                <UserNavbar />
              ) : (
                <GuestNavbar />
              )}
            </>
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
