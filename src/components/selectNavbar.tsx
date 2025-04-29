"use client";
import { useSession } from "next-auth/react";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import PublicNavbar from "./Navbar";

export default function SelectNavbar() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user.role === "ADMIN" ? (
        <AdminNavbar />
      ) : session ? (
        <UserNavbar />
      ) : (
        <PublicNavbar />
      )}
    </>
  );
}
