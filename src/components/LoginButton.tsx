"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function LoginButton() {
  const [isPending, setIsPending] = useState(false);

  return (
    <Link href="/login">
      <Button
        variant="dynamis"
        className="cursor-pointer"
        isPending={isPending}
        onClick={() => setIsPending(true)}
      >
        {/* <Link href="/login">Iniciar sesión</Link> */}
        {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
      </Button>
    </Link>
  );
}
