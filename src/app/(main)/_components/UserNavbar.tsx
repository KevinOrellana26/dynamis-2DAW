"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function UserNavbar() {
  const path = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Ejercicios", href: "/exercise" },
    { name: "Rutinas", href: "/routine" },
    { name: "Progreso", href: "/progress" },
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

export default UserNavbar;
