
import { DEFAULT_SEARCH_PARAMS_OPTIONS, SearchParamsOptionsT } from "@/config/params.config";
import { createSearchParamsCache, parseAsBoolean, parseAsString } from "nuqs/server";

// export const exercisesSearchParams = (options?: SearchParamsOptionsT) => {
//     const newOptions = { ...DEFAULT_SEARCH_PARAMS_OPTIONS, ...options };
//     return {
//     query: parseAsString
//             .withDefault("")
//             .withOptions(newOptions)
//     };
// };
const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS }

export const exercisesSearchParams = {
    query: parseAsString
        .withDefault("")
        .withOptions(options),
    selectedMuscle: parseAsString
        .withDefault("")
        .withOptions(options),
    showFavourites: parseAsBoolean.withDefault(false).withOptions(options)
}
export const exercisesSearchParamsCache = createSearchParamsCache(
    exercisesSearchParams,
);