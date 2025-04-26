"use client"; //<- Ya que el usuario interactua con el botón
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function LoginButton() {
  // React Hook que te da acceso a los datos de sesión del usuario logueado y te permite modificarlos.
  const { data: session, status } = useSession();
  console.log("sessión data: ", session);
  console.log("session status: ", status);

  // if (status === "loading") {
  //   return (
  //     <Button variant={"dynamis"} disabled>
  //       Cargando...
  //     </Button>
  //   );
  // }

  return (
    <>
      {!session ? (
        <Button variant={"dynamis"} asChild>
          <Link href={"/login"}>Iniciar sesión</Link>
        </Button>
      ) : (
        <Button
          variant={"dynamis"}
          className="cursor-pointer"
          onClick={() => signOut({ redirectTo: "/" })}
        >
          Cerrar sesión
        </Button>
      )}
    </>
  );
}
