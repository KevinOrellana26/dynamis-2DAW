"use client";

import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import {
  parseAsBoolean,
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from "nuqs";
import { useDebouncedCallback } from "use-debounce";
import SearchInput from "../../_components/SearchInput";
import CheckboxFavorite from "./CheckboxFavorite";
import ComboboxMuscle from "./ComboboxMuscle";

export default function ExercisesFilters() {
  const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };

  const [exercisesFilters, setExercisesFilters] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
      selectedMuscle: parseAsString.withDefault(""),
      showFavorites: parseAsBoolean.withDefault(false),
      page: parseAsInteger.withDefault(1),
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
          debouncedSetExercisesFilters((prev) => ({
            ...prev,
            query: value,
            page: 1,
          }));
        }}
      />
      
      {/* ComboBox */}
      <ComboboxMuscle
        value={selectedMuscle}
        className="w-full flex-1"
        onValueChange={(value) => {
          setExercisesFilters((prev) => ({
            ...prev,
            selectedMuscle: value,
            page: 1,
          }));
        }}
      />

      {/* Checkbox Favorites */}
      <div className="flex items-center justify-center mb-1.5">
        <CheckboxFavorite
          checked={showFavorites}
          onCheckedChange={(value: boolean) => {
            setExercisesFilters((prev) => ({
              ...prev,
              showFavorites: value,
              page: 1,
            }));
          }}
        />
      </div>
    </div>
  );
}
