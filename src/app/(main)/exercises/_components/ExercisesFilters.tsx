"use client";

import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";
import SearchInput from "../../_components/SearchInput";
import SelectMuscle from "./SelectMuscle";
import CheckboxFavorite from "./CheckboxFavorite";
import SearchButton from "../../_components/SearchButton";

export default function ExercisesFilters() {
  const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };

  const [exercisesFilters, setExercisesFilters] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
      selectedMuscle: parseAsString.withDefault(""),
      showFavourites: parseAsBoolean.withDefault(false),
    },
    options
  );
  const { query, selectedMuscle, showFavourites } = exercisesFilters;

  return (
    <div className="flex flex-col my-5 gap-3 md:flex-row md:items-end">
      {/* Input */}
      <SearchInput
        placeholder="Press Banca, Sentadilla..."
        value={query}
        onChange={(value) => {
          setExercisesFilters((prev) => ({ ...prev, query: value }));
        }}
      />

      {/* Select con musculos */}
      <div className="flex-1">
        <SelectMuscle
          value={selectedMuscle}
          className="w-full"
          onValueChange={(value) => {
            setExercisesFilters((prev) => ({ ...prev, selectedMuscle: value }));
          }}
          onClear={() =>
            setExercisesFilters((prev) => ({
              ...prev,
              selectedMuscle: "",
            }))
          }
        />
      </div>

      {/* Checkbox Favorites  + Botón buscar*/}
      <div className="flex items-center gap-3">
        <CheckboxFavorite
          checked={showFavourites}
          onCheckedChange={(value) => {
            setExercisesFilters((prev) => ({ ...prev, showFavourites: value }));
          }}
        />
        <SearchButton />
      </div>
    </div>
  );
}
