import { DEFAULT_SEARCH_PARAMS_OPTIONS } from "@/config/params.config";
import { createSearchParamsCache, parseAsString } from "nuqs/server";

const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };

const tokenSearchParams = {
  token: parseAsString.withDefault("").withOptions(options),
  email: parseAsString.withDefault("").withOptions(options),
};

export const tokenSearchParamsCache =
  createSearchParamsCache(tokenSearchParams);
