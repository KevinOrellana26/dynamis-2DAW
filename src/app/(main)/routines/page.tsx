"use client";

import PaginationComponent from "@/app/(main)/_components/Pagination";
import RoutineCard from "@/app/(main)/_components/RoutineCard";
import Routine from "@/mocks/routines.json";
import React, { useState } from "react";
// import SearchButton from "../_components/SearchButton";
import SearchInput from "../_components/SearchInput";

export default function RutinaPage() {
  const [inputSearch, setInputSearch] = useState("");

  const mockRoutines = Routine.map((routine) => ({
    ...routine,
    createdAt: new Date(routine.createdAt), // Convierte "createdAt" a Date
  }));

  //Ordena las rutinas por fecha (más reciente) y toma las 6 primeras
  const latestRoutines = mockRoutines
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 7);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando rutina: ", inputSearch);
  };

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir rutina */}
      <header className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-accent-blue dark:text-accent-blue">
            Mis Rutinas
          </h1>
          <p className="font-semibold text-muted-foreground text-xl mt-2">
            Gestiona y crea rutinas personalizadas.
          </p>
        </div>
        {/* Solo para ADMIN */}
        {/* <div>
          <NewRoutineButton />
        </div> */}
      </header>

      {/* Formulario buscar rutinas */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-between gap-2 my-8"
      >
        {/* <SearchInput
          placeholder="full body, upper body, lower body..."
          value={inputSearch}
          onChange={setInputSearch}
        /> */}
        {/* <SearchButton /> */}
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {latestRoutines.map((routine) => (
          <RoutineCard key={routine.id} {...routine} />
        ))}
      </div>

      <footer className="mt-4">
        {/* <PaginationComponent /> */}
      </footer>
    </div>
  );
}
