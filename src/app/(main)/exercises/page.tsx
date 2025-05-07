import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import { handleAsync } from "@/app/_shared/errors";
import type { SearchParams } from "nuqs/server";
import ExerciseCard from "../_components/ExerciseCard";
import Pagination from "../_components/Pagination";
import ExercisesFilters from "./_components/ExercisesFilters";
import { exercisesSearchParamsCache } from "./_core/exercises.search-params";
import { getExercisesUseCase } from "./_core/exercises.use-cases";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ExercisePage({ ...props }: PageProps) {
  //Obtener la sesión del usuario
  const session = await getSession();
  const userId = session.userId;

  //Obtener los parámetros de búsqueda de la URL
  const searchParams = await props.searchParams;
  const parsedSearchParams = exercisesSearchParamsCache.parse(searchParams);
  const { query, selectedMuscle, showFavorites, page = 1 } = parsedSearchParams;

  const limit = 8;
  //Pasar los parámetros al caso de uso
  const [data, error] = await handleAsync(() =>
    getExercisesUseCase({
      query,
      selectedMuscle,
      showFavorites,
      userId: showFavorites ? userId : undefined,
      page: Number(page),
      limit, //numero de resultados por página
    })
  );

  // Verifica si data es null
  if (!data) {
    return (
      <div className="mx-3 px-6 md:px-8 my-8">
        <p className="text-red-500">
          {error?.message || "Ocurrió un error al cargar los ejercicios."}
        </p>
      </div>
    );
  }

  const { exercises, totalPages } = data;
  // verificar si la página actual no sea mayor al total de páginas
  const isValidPage = page > 0 && page <= totalPages;

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir rutina */}
      <header className="flex flex-col items-center md:flex-row md:justify-between gap-2">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-accent-blue dark:text-accent-blue">
            Ejercicios
          </h1>
          <p className="font-semibold text-muted-foreground text-xl mt-1">
            Explora y gestiona la lista de ejercicios disponibles.
          </p>
        </div>
      </header>
      <ExercisesFilters />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {!isValidPage ? (
          //Error: si la página no es válida
          <p className="text-sky-900">La página no existe.</p>
        ) : exercises.length > 0 ? (
          exercises.map((exercise) => (
            <div key={exercise.id}>
              <ExerciseCard exercise={exercise} />
            </div>
          ))
        ) : (
          //Error: si no hay ejercicios
          <p className="text-sky-900">No se encontraron ejercicios.</p>
        )}
      </div>

      {/* Paginación */}
      <footer className="mt-4">
        <Pagination totalPages={totalPages}/>
      </footer>
    </div>
  );
}
