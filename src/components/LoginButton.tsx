"use client"; //<- Ya que el usuario interactua con el botón
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginButton() {
  return (
    <>
      <Button variant={"dynamis"} asChild>
        <Link href={"/login"}>Iniciar sesión</Link>
      </Button>
    </>
  );
}
