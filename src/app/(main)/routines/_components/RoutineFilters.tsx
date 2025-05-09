"use client";
import React from "react";
import SearchInput from "../../_components/SearchInput";
import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useDebouncedCallback } from "use-debounce";

export default function RoutineFilters() {
  const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };
  const [routinesFilters, setRoutinesFilters] = useQueryStates(
    {
      query: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(1),
    },
    options
  );
  const debouncedSetRoutinesFilters = useDebouncedCallback(
    setRoutinesFilters,
    300
  );

  const { query } = routinesFilters;

  return (
    <div className="flex flex-col my-5 gap-3 md:flex-row md:items-end">
      {/* Input */}
      <SearchInput
        placeholder="Full Body, Upper Body, Cardio..."
        defaultValue={query}
        onChange={(e) => {
          const value = e.target.value;
          debouncedSetRoutinesFilters((prev) => ({
            ...prev,
            query: value,
            page: 1,
          }));
        }}
      />
    </div>
  );
}
