"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginButton() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsPending(true);
    router.push("/login");
  };

  return (
    <Button variant="dynamis">
      <Link href="/login">Iniciar sesión</Link>
    </Button>
  );
}
