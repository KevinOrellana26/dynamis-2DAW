import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };

export const routinesSearchParams = {
  query: parseAsString.withDefault("").withOptions(options),
  page: parseAsInteger.withDefault(1).withOptions(options),
};

export const routinesSearchParamsCache =
  createSearchParamsCache(routinesSearchParams);
