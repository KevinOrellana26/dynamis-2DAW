import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

function NewExerciseButton() {
  return (
    <>
      <Button variant={"dynamis"} asChild>
        <Link href="/addRoutine">
          <Plus /> Nuevo Ejercicio
        </Link>
      </Button>
    </>
  );
}

export default NewExerciseButton;
