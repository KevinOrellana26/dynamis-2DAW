import { logout } from "@/app/(auth)/_core/auth/auth.actions";
import { useState } from "react";
import { LoginButton } from "./LoginButton";
import LogoutButton from "./LogoutButton";

type AuthButtonT = {
  isLoggedIn: boolean;
}

export default function AuthButton({isLoggedIn: initialIsLoggedIn}: AuthButtonT) {

  const handleLogout = async () => {
    console.log("cerrando sesión...");
    await logout();
  };

  return isLoggedIn ? <LogoutButton onClick={handleLogout} /> : <LoginButton />;
}
