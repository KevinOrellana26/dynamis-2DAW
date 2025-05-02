"use client";

import AuthButton from "@/components/AuthButton";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../../../components/theme-toggle-button";

type AdminNavbarT = {
  isLoggedIn: boolean;
}

function AdminNavbar({ isLoggedIn }: AdminNavbarT) {
  const path = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Añadir Ejercicio", href: "/exercise" },
    { name: "Añadir Rutinas", href: "/routine" },
    { name: "Listar Usuario", href: "/test" }, //!EJEMPLO
  ];

  return (
    <nav className="border-b border-gray-300 dark:border-gray-800">
      <div className="flex items-center justify-between h-18 px-8 md:px-10 lg:px-12">
        <Logo />
        {/* Rutas */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-medium text-[#2057A9] hover:text-[#354966d5] dark:text-[#2057A9] dark:hover:text-[#354966d5]
                    ${
                      path === item.href
                        ? "text-[#2057A9] dark:text-[#2057A9]"
                        : "text-gray-700 dark:text-[#2057A9]"
                    }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Iniciar Sesión y Btn Mode */}
        <div className="flex items-center gap-2">
          <ModeToggle /> {/* Botón Temas */}
          <AuthButton isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
