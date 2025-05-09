import React from "react";
import { getExercisesUseCase } from "../_core/exercises.use-cases";
import ExerciseCard from "./ExerciseCard";
import ErrorMessage from "../../_components/ErrorMessage";
import Pagination from "../../_components/Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { handleAsync } from "@/app/_shared/errors";
import { exercisesSearchParamsCache } from "../_core/exercises.search-params";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";

export default async function ExerciseList() {
  const searchParams = exercisesSearchParamsCache.all();

  const { query, selectedMuscle, showFavorites, page } = searchParams;
  //Obtener la sesión del usuario
  const session = await getSession();
  const userId = session.userId;
  const limit = 8;

  //Pasar los parámetros al caso de uso
  const [exercisesPaginatedData, error] = await handleAsync(() =>
    getExercisesUseCase({
      query,
      selectedMuscle,
      showFavorites,
      userId: showFavorites ? userId : undefined,
      page: Number(page),
      limit, //numero de resultados por página
    })
  );

  // Verifica si exercisesPaginatedData es null, el mensaje de error lo trae desde la BD.
  if (!exercisesPaginatedData) {
    return (
      <ErrorMessage
        message={error?.message || "Ocurrió un error al cargar los ejercicios."}
        path="/exercises"
      />
    );
  }
  const { exercises, totalPages } = exercisesPaginatedData;

  // verificar si la página actual no sea mayor al total de páginas
  const isValidPage = page > 0 && page <= totalPages;

  if (exercises.length === 0) {
    return (
      <ErrorMessage message="No se encontraron ejercicios." path="/exercises" />
    );
  }

  if (!isValidPage) {
    return (
      <ErrorMessage
        message={`La página ${page} no existe.`}
        path="/exercises"
      />
    );
  }

  const sortedExercises = exercises.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-7">
        {sortedExercises.map((exercise) => (
          <div key={exercise.id}>
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>

      {/* Paginación */}
      {isValidPage && <Pagination totalPages={totalPages} showPage={2} />}
    </>
  );
}
export function ExerciseListSkeleton() {
  const count = 8;
  const array = Array.from({ length: count });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-7">
        {array.map((_, index) => {
          return <Skeleton className="bg-red-500" key={index} />;
        })}
      </div>
      <Skeleton className="bg-red-500" />;
    </>
  );
}
