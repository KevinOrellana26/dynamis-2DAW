import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import ExerciseList, {
  ExerciseListSkeleton,
} from "../_components/ExerciseList";
import ExercisesFilters from "./_components/ExercisesFilters";
import { exercisesSearchParamsCache } from "./_core/exercises.search-params";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ExercisePage({ ...props }: PageProps) {
  //Obtener los parámetros de búsqueda de la URL
  const searchParams = await props.searchParams;
  const parsedSearchParams = exercisesSearchParamsCache.parse(searchParams);
  const { query, selectedMuscle, showFavorites, page } = parsedSearchParams;

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
      <Suspense
        fallback={<ExerciseListSkeleton />}
        key={`${query}${selectedMuscle}${showFavorites}${page}`}
        // key={new Date().toString()}
      >
        <ExerciseList />
      </Suspense>
    </div>
  );
}
