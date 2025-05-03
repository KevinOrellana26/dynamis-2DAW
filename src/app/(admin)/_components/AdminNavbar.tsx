"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminNavbar() {
  const path = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Añadir Ejercicio", href: "/exercise" },
    { name: "Añadir Rutinas", href: "/routine" },
    { name: "Listar Usuario", href: "/test" }, //!EJEMPLO
  ];

  return (
    <>
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
    </>
  );
}

export default AdminNavbar;
