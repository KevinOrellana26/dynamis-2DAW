import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img
        src="/404/homer.gif"
        alt="Página no encontrada"
        className="w-96 h-96 object-contain mb-6"
      />

      <h1 className="text-2xl font-semibold mb-2">
        No encontramos esta página
      </h1>
      <p className="text-muted-foreground mb-2">
        La ruta a la que intentas acceder no existe.
      </p>
      <p className="text-sm text-muted-foreground mb-6">
        (O quizás Homero se la comió... 🍩)
      </p>

      {/* Botón para volver */}
      <Link href="/">
        <Button variant={"dynamis"}>Volver al inicio</Button>
      </Link>
    </div>
  );
}
