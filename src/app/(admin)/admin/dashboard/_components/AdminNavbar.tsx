"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminNavbar() {
  const path = usePathname();

  const navItems = [
    { name: "Inicio", href: "/admin/dashboard" },
    { name: "Ejercicios", href: "/admin/exercises" },
    { name: "Rutinas", href: "/admin/routines" },
    { name: "Usuarios", href: "/admin/users" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-lg font-medium text-accent-blue hover:text-[#354966d5] dark:text-accent-blue dark:hover:text-[#354966d5]
                    ${
                      path === item.href
                        ? "text-accent-blue dark:text-accent-blue"
                        : "text-gray-700 dark:text-accent-blue"
                    }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}

export default AdminNavbar;
