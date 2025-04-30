"use client";

import { LoginButton } from "@/components/LoginButton";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/theme-toggle-button";

function GuestNavbar() {
  return (
    <nav className="border-b border-gray-300 dark:border-gray-800">
      <div className="flex items-center justify-between h-18 px-8 md:px-10 lg:px-12">
        <Logo />
        {/* Iniciar Sesión y Btn Mode */}
        <div className="flex items-center gap-2">
          <ModeToggle /> {/* Botón Temas */}
          <LoginButton />
        </div>
      </div>
    </nav>
  );
}

export default GuestNavbar;
