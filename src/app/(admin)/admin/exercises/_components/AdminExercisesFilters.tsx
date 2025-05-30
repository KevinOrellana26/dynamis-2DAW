"use client";
import SearchInput from "@/app/(main)/_components/SearchInput";
import ComboboxMuscle from "@/app/(main)/exercises/_components/ComboboxMuscle";
import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useDebouncedCallback } from "use-debounce";

export default function AdminExercisesFilters() {
  const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };
  const [adminExercisesFilters, setAdminExercisesFilters] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
      selectedMuscle: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(1),
    },
    options
  );

  const debounceSetAdminExercisesFilters = useDebouncedCallback(
    setAdminExercisesFilters,
    300
  );

  const { page, query, selectedMuscle } = adminExercisesFilters;

  return (
    <div className="flex flex-col my-5 gap-3 md:flex-row md:items-end">
      {/* Input */}
      <SearchInput
        placeholder="Press Banca, Sentadilla..."
        defaultValue={query}
        onChange={(e) => {
          const value = e.target.value;
          debounceSetAdminExercisesFilters((prev) => ({
            ...prev,
            query: value,
            page: 1,
          }));
        }}
      />
      <ComboboxMuscle
        value={selectedMuscle}
        className="w-full flex-1"
        onValueChange={(value) => {
          setAdminExercisesFilters((prev) => ({
            ...prev,
            selectedMuscle: value,
            page: 1,
          }));
        }}
      />
    </div>
  );
}
