import { ReactNode } from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";
import { ModeToggle } from "./theme-toggle-button";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import UserAvatar from "@/app/(main)/_components/UserAvatar";

type HeaderT = {
  children?: ReactNode;
};

export default async function Header({ children }: HeaderT) {
  const session = await getSession();

  return (
    <header className="border-b border-gray-300 bg-background/50 backdrop-blur-md dark:border-gray-800 sticky top-0 z-50">
      <div className="flex items-center justify-between h-18 px-8 md:px-10 lg:px-12">
        <Logo />
        {/* Rutas */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {children}
        </nav>
        {/* Iniciar Sesión y Btn Mode */}
        <div className="flex items-center gap-2">
          <ModeToggle /> {/* Botón Temas */}
          {session.isLoggedIn ? (
            <>
              <LogoutButton />
              <UserAvatar
                avatar={session.avatar ?? ""}
                name={session.name ?? ""}
                className="h-8 w-8"
              />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
}
