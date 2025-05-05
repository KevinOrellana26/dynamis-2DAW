import { handleAsync } from "@/app/_shared/errors";
import type { SearchParams } from "nuqs/server";
import ExerciseCard from "../_components/ExerciseCard";
import Pagination from "../_components/Pagination";
import ExercisesFilters from "./_components/ExercisesFilters";
import { exercisesSearchParamsCache } from "./_core/exercises.search-params";
import { getExercisesUseCase } from "./_core/exercises.use-cases";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ExercisePage({ ...props }: PageProps) {
  const searchParams = await props.searchParams;
  const parsedSearchParams = exercisesSearchParamsCache.parse(searchParams);
  const { query, selectedMuscle, showFavourites } = parsedSearchParams;

  //Obtener la sesión del usuario
  const session = await getSession();
  const userId = session.userId;

  //Pasar los parámetros al caso de uso
  const [exercises, error] = await handleAsync(() =>
    getExercisesUseCase({
      query,
      muscle: selectedMuscle,
      showFavourites,
      userId,
    })
  );

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir rutina */}
      <header className="flex flex-col items-center md:flex-row md:justify-between gap-2">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-[#2057A9] dark:text-[#2057A9]">
            Ejercicios
          </h1>
          <p className="font-semibold text-muted-foreground text-xl mt-1">
            Explora y gestiona la lista de ejercicios disponibles.
          </p>
        </div>
        {/* Solo para ADMIN */}
        {/* <div>
          <NewExerciseButton />
        </div> */}
      </header>
      <ExercisesFilters />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {exercises ? (
          exercises.map((exercise) => (
            <div key={exercise.id}>
              <ExerciseCard {...exercise} />
            </div>
          ))
        ) : (
          <p className="text-sky-900">{error?.message}</p>
        )}
      </div>

      {/* Paginación */}
      <footer className="mt-4">
        <Pagination />
      </footer>
    </div>
  );
}
