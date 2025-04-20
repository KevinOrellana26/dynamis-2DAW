"use client";

import { Dumbbell } from "lucide-react";
import { ModeToggle } from "./theme-toggle-button";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Ejercicios", href: "/ejercicio" },
    { name: "Rutinas", href: "/rutina" },
  ];

  const path = usePathname();

  return (
    <nav className="border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="flex items-center justify-between h-18 px-8 md:px-10 lg:px-12">
        {/* Logo y Nombre */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="text-[#2057A9]" />
            <h1 className="text-2xl font-bold text-[#2057A9] dark:text-blue-400">
              Dýnamis
            </h1>
          </Link>
        </div>
        {/* Rutas */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-medium transition-colors hover:text-blue-900 dark:hover:text-blue-400 
                    ${
                      path === item.href
                        ? "text-blue-900 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Iniciar Sesión y Btn Mode */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant={"outline"} asChild>
            <Link href={"/login"}>Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
