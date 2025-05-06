"use client";

import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";
import { useDebouncedCallback } from "use-debounce";
import SearchInput from "../../_components/SearchInput";
import CheckboxFavorite from "./CheckboxFavorite";
import SelectMuscle from "./SelectMuscle";

export default function ExercisesFilters() {
  const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };

  const [exercisesFilters, setExercisesFilters] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
      selectedMuscle: parseAsString.withDefault(""),
      showFavorites: parseAsBoolean.withDefault(false),
    },
    options
  );

  const debouncedSetExercisesFilters = useDebouncedCallback(
    setExercisesFilters,
    300
  );

  const { query, selectedMuscle, showFavorites } = exercisesFilters;

  return (
    <div className="flex flex-col my-5 gap-3 md:flex-row md:items-end">
      {/* Input */}
      <SearchInput
        placeholder="Press Banca, Sentadilla..."
        defaultValue={query}
        onChange={(e) => {
          const value = e.target.value;
          debouncedSetExercisesFilters((prev) => ({ ...prev, query: value }));
        }}
      />

      {/* Select con musculos */}
      <SelectMuscle
        value={selectedMuscle}
        className="w-full flex-1"
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

      {/* Checkbox Favorites  + Botón buscar*/}
      <div className="flex items-center justify-center mb-1.5">
        <CheckboxFavorite
          checked={showFavorites}
          onCheckedChange={(value: boolean) => {
            setExercisesFilters((prev) => ({ ...prev, showFavorites: value }));
          }}
        />
      </div>
    </div>
  );
}
