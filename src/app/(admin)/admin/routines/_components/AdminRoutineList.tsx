import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import ErrorMessage from "@/app/(main)/_components/ErrorMessage";
import PaginationComponent from "@/app/(main)/_components/Pagination";
import PaginationSkeleton from "@/app/(main)/_components/PaginationSkeleton";
import RoutineCard from "@/app/(main)/routines/_components/RoutineCard";
import RoutineCardSkeleton from "@/app/(main)/routines/_components/RoutineCardSkeleton";
import { routinesSearchParamsCache } from "@/app/(main)/routines/_core/routines.search-params";
import { handleAsync } from "@/app/_shared/errors";
import { getAllRoutinesUseCase } from "../_core/admin.routines.use-cases";

export default async function AdminRoutineList() {
  const searchParams = routinesSearchParamsCache.all();
  const { query, page } = searchParams;

  const session = await getSession();
  const { role, userId } = session;
  const limit = 6;

  const [routinesPaginatedData, error] = await handleAsync(() =>
    getAllRoutinesUseCase({
      query,
      page: Number(page),
      limit,
    })
  );

  if (!routinesPaginatedData) {
    return (
      <ErrorMessage
        message={error?.message || "Ocurrió un error al cargar las rutinas."}
        path="/routines"
      />
    );
  }
  const { routines, totalPages } = routinesPaginatedData;
  // verificar si la página actual no sea mayor al total de páginas
  const isValidPage = page > 0 && page <= totalPages;

  if (routines.length === 0) {
    return (
      <ErrorMessage message="No se encontraron rutinas." path="/routines" />
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

  const sortedRoutines = routines.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-7">
        {sortedRoutines.map((routine) => (
          <RoutineCard
            routine={routine}
            key={routine.id}
            role={role}
          />
        ))}
      </div>

      {isValidPage && (
        <PaginationComponent totalPages={totalPages} showPage={2} />
      )}
    </>
  );
}

export function RoutineListSkeleton() {
  const count = 6;
  const array = Array.from({ length: count });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-7">
        {array.map((_, index) => {
          return <RoutineCardSkeleton key={index} />;
        })}
      </div>

      <PaginationSkeleton />
    </>
  );
}
