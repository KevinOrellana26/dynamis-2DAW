import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { inter } from "@/styles/fonts";
import type { Metadata } from "next";
import "../styles/globals.css";
import AdminNavbar from "./(admin)/_components/AdminNavbar";
import UserNavbar from "./(main)/_components/UserNavbar";
import Providers from "./Providers";

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
        <Providers>
          <Header>
            {session?.role === "ADMIN" && <AdminNavbar />}
            {session?.role === "USER" && <UserNavbar />}
          </Header>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
