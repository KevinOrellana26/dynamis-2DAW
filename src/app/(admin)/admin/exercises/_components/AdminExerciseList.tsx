import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import ErrorMessage from "@/app/(main)/_components/ErrorMessage";
import PaginationComponent from "@/app/(main)/_components/Pagination";
import PaginationSkeleton from "@/app/(main)/_components/PaginationSkeleton";
import { handleAsync } from "@/app/_shared/errors";
import { sortExercisesByName } from "@/lib/utils";
import { adminExercisesSearchParamsCache } from "../_core/admin.exercises.search-params";
import { getAllExercisesUseCase } from "../_core/admin.exercises.use-cases";
import AdminExerciseCard from "./AdminExerciseCard";
import AdminExerciseCardSkeleton from "./AdminExerciseCardSkeleton";

export default async function AdminExerciseList() {
  const session = await getSession();
  const searchParams = adminExercisesSearchParamsCache.all();
  const { page, query, selectedMuscle } = searchParams;

  const limit = 8;

  const [exercisesPaginatedData, error] = await handleAsync(() =>
    getAllExercisesUseCase({
      query,
      selectedMuscle,
      page: Number(page),
      limit,
    })
  );

  if (!exercisesPaginatedData) {
    return (
      <ErrorMessage
        message={error?.message || "Ocurrió un error al cargar los ejercicios."}
        path="/admin/dashboard"
      />
    );
  }

  const { exercises, totalPages } = exercisesPaginatedData;

  const isValidPage = page > 0 && page <= totalPages;

  if (exercises.length === 0) {
    return (
      <ErrorMessage
        message="No se encontraron ejercicios."
        path="/admin/exercises"
      />
    );
  }

  if (!isValidPage) {
    return (
      <ErrorMessage
        message={`La página ${page} no existe.`}
        path="/admin/dashboard"
      />
    );
  }

  const sortedExercises = sortExercisesByName(exercises);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-7">
        {sortedExercises.map((exercise) => (
          <AdminExerciseCard exercise={exercise} key={exercise.id} />
        ))}
      </div>
      {isValidPage && (
        <PaginationComponent totalPages={totalPages} showPage={2} />
      )}
    </>
  );
}

export function AdminExerciseListSkeleton() {
  const count = 8;
  const array = Array.from({ length: count });
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-7">
        {array.map((_, index) => {
          return <AdminExerciseCardSkeleton key={index} />;
        })}
      </div>

      <PaginationSkeleton />
    </>
  );
}
