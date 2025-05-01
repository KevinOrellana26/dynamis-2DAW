"use client";

import Exercise from "@/mocks/exercise.json";
import { useState } from "react";
import ExerciseCard from "../_components/ExerciseCard";
import Pagination from "../_components/Pagination";
import SearchButton from "../_components/SearchButton";
import CheckboxFavorite from "./_components/CheckboxFavorite";
import SelectMuscle from "./_components/SelectMuscle";
import SearchInput from "../_components/SearchInput";

function Ejercicio() {
  const mockExercises = Exercise;

  const [inputSearch, setInputSearch] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      search: inputSearch,
      muscle: selectedMuscle,
      favoritesOnly: showFavorites,
    });
  };

  const latestExercise = mockExercises.slice(0, 8);

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir rutina */}
      <header className="flex flex-col items-center md:flex-row md:justify-between gap-2">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-[#2057A9] dark:text-[#2057A9]">
            Ejercicios
          </h1>
          <p className="font-light text-muted-foreground text-xl mt-1">
            Explora y gestiona la lista de ejercicios disponibles.
          </p>
        </div>
        {/* Solo para ADMIN */}
        {/* <div>
          <NewExerciseButton />
        </div> */}
      </header>

      {/* Formulario buscar rutinas */}
      <form onSubmit={handleSubmit} className="my-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          {/* Input */}
          <SearchInput
            placeholder="Press Banca, Sentadilla..."
            value={inputSearch}
            onChange={setInputSearch}
          />

          {/* Select con musculos */}
          <div className="flex-1">
            <SelectMuscle
              value={selectedMuscle}
              className="w-full"
              onValueChange={setSelectedMuscle}
            />
          </div>

          {/* Checkbox Favorites  + Botón buscar*/}
          <div className="flex items-center gap-3">
            <CheckboxFavorite
              checked={showFavorites}
              onCheckedChange={setShowFavorites}
            />
            <SearchButton />
          </div>
        </div>
      </form>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {latestExercise.map((exercise) => (
          <div key={exercise.id}>
            <ExerciseCard {...exercise} />
          </div>
        ))}
      </div>

      {/* Paginación */}
      <footer className="mt-4">
        <Pagination />
      </footer>
    </div>
  );
}

export default Ejercicio;
