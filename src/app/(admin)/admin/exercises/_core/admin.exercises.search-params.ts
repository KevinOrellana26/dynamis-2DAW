import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };

export const adminExercisesSearchParams = {
  query: parseAsString.withDefault("").withOptions(options),
  selectedMuscle: parseAsString.withDefault("").withOptions(options),
  page: parseAsInteger.withDefault(1).withOptions(options),
};

export const adminExercisesSearchParamsCache = createSearchParamsCache(
  adminExercisesSearchParams
);
