import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import { handleAsync } from "@/app/_shared/errors";
import type { SearchParams } from "nuqs/server";
import BackButton from "../_components/BackButton";
import ExerciseCard from "../_components/ExerciseCard";
import Pagination from "../_components/Pagination";
import ExercisesFilters from "./_components/ExercisesFilters";
import { exercisesSearchParamsCache } from "./_core/exercises.search-params";
import { getExercisesUseCase } from "./_core/exercises.use-cases";
import ErrorMessage from "../_components/ErrorMessage";

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

  const limit: number = 8;
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

  // Verifica si data es null, el mensaje de error lo trae desde la BD.
  if (!data) {
    return (
      <ErrorMessage
        message={error?.message || "Ocurrió un error al cargar los ejercicios."}
      />
    );
  }

  const { exercises, totalPages } = data;

  // verificar si la página actual no sea mayor al total de páginas
  const isValidPage = page > 0 && page <= totalPages;
  if (!isValidPage) {
    return <ErrorMessage message={`La página ${page} no existe.`} />;
  }

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
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <div key={exercise.id}>
              <ExerciseCard exercise={exercise} />
            </div>
          ))
        ) : (
          //Error: si no hay ejercicios y esta la variable page harcodeada en la URL
          <ErrorMessage message="No se encontraron ejercicios." />
        )}
      </div>

      {/* Paginación */}
      {isValidPage && <Pagination classname="mt-7" totalPages={totalPages} />}
    </div>
  );
}
