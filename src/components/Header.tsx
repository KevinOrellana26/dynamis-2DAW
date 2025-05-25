import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import UserAvatar from "@/app/(main)/_components/UserAvatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "@/config/theme.config";
import { ReactNode } from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";
import { ModeToggle } from "./theme-toggle-button";
import { Button } from "./ui/button";

type HeaderT = {
  children?: ReactNode;
};

export default async function Header({ children }: HeaderT) {
  const session = await getSession();

  return (
    <header className="border-b border-gray-300 bg-background/50 backdrop-blur-md dark:border-gray-800 sticky top-0 z-50">
      <div className="flex items-center justify-between h-18 px-8 md:px-10 lg:px-12">
        <Logo />

        {/* Navbar Escritorio */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {children}
        </nav>

        {/* Navbar móvil */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"link"} size={"icon"}>
                <Menu className="size-6 text-accent-blue" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col justify-between h-full p-6"
            >
              <div className="flex flex-col h-full justify-between">
                <SheetHeader className="flex flex-row justify-between">
                  <VisuallyHidden>
                    <SheetTitle>Menú</SheetTitle>
                  </VisuallyHidden>
                  <Logo />
                  <ModeToggle />
                </SheetHeader>

                {/* Menú de navegación */}
                <nav className="flex flex-col grow space-y-4 mt-6">
                  {children}
                </nav>

                {/* Footer fijado abajo */}
                <div className="flex flex-col items-center gap-4 mt-6">
                  {session.isLoggedIn ? (
                    <>
                      <UserAvatar
                        userId={session.userId ?? ""}
                        avatar={session.avatar ?? ""}
                        name={session.name ?? ""}
                        className="h-8 w-8"
                      />
                      <LogoutButton />
                    </>
                  ) : (
                    <LoginButton />
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {/* Iniciar Sesión y Botón de Temas */}
          <ModeToggle />
          {session.isLoggedIn ? (
            <>
              <LogoutButton />
              <UserAvatar
                userId={session.userId ?? ""}
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
