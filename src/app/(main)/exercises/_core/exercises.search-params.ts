import {
  DEFAULT_SEARCH_PARAMS_OPTIONS
} from "@/config/params.config";
import {
  createSearchParamsCache,
  parseAsBoolean,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";

// export const exercisesSearchParams = (options?: SearchParamsOptionsT) => {
//     const newOptions = { ...DEFAULT_SEARCH_PARAMS_OPTIONS, ...options };
//     return {
//     query: parseAsString
//             .withDefault("")
//             .withOptions(newOptions)
//     };
// };
const options = { ...DEFAULT_SEARCH_PARAMS_OPTIONS };

//MANEJAR LOS FILTROS DE BUSQUEDA Y PAGINACION
export const exercisesSearchParams = {
  query: parseAsString.withDefault("").withOptions(options),
  selectedMuscle: parseAsString.withDefault("").withOptions(options),
  showFavorites: parseAsBoolean.withDefault(false).withOptions(options),
  page: parseAsInteger.withDefault(1).withOptions(options), //pagina actual
};
//EVITA RECALCULAR LOS PARAMETROS CADA VEZ QUE SE CAMBIA UN FILTRO
export const exercisesSearchParamsCache = createSearchParamsCache( 
  exercisesSearchParams
);

//MANEJAR LA PAGINACION
// export const paginationSearchParams = {
//   page: parseAsInteger.withDefault(1).withOptions(options),
// };
// export const paginationSearchParamsCache = createSearchParamsCache(
//   paginationSearchParams
// );
