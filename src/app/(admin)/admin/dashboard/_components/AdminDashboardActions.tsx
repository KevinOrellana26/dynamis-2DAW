import { Button } from "@/components/ui/button";
import { Dumbell, PersonDetails } from "@/config/theme.config";
import { ClipboardList, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AdminDashboardActions() {
  return (
    <>
      <Link href={"/admin/users"}>
        <Button variant="dynamis" className="w-full md:h-20">
          <PersonDetails className="md:size-6 mr-2" />
          <h1 className="md:text-lg">Ver todos los usuarios</h1>
        </Button>
      </Link>

      <Link href={"/admin/exercises/new"}>
        <Button variant="dynamis" className="w-full md:h-20">
          <Dumbell className="md:size-6 mr-2" />
          <h1 className="md:text-lg">Crear ejercicio</h1>
        </Button>
      </Link>

      <Link href={"/admin/routines/new"}>
        <Button variant="dynamis" className="w-full md:h-20">
          <PlusCircle className="md:size-6 mr-2" />
          <h1 className="md:text-lg">Crear rutina</h1>
        </Button>
      </Link>
    </>
  );
}
