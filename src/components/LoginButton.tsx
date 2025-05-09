"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginButton() {
  const [isPending, setIsPending] = useState(false);

  const handleLogin = () => {
    setIsPending(true);
  };

  return (
    <Link href="/login">
      <Button
        variant="dynamis"
        className="cursor-pointer"
        isPending={isPending}
        onClick={handleLogin}
      >
        {isPending ? "Iniciando sesión" : "Iniciar sesión"}
      </Button>
    </Link>
  );
}
