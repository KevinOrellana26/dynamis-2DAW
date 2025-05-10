import { routinesSearchParamsCache } from "../_core/routines.search-params";
import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import { handleAsync } from "@/app/_shared/errors";
import { getRoutinesUseCase } from "../_core/routines.use-cases";
import ErrorMessage from "../../_components/ErrorMessage";
import RoutineCard from "./RoutineCard";
import Pagination from "../../_components/Pagination";
import PaginationSkeleton from "../../_components/PaginationSkeleton";
import RoutineCardSkeleton from "./RoutineCardSkeleton";

export default async function RoutineList() {
  const searchParams = routinesSearchParamsCache.all();
  const { query, page } = searchParams;

  const session = await getSession();
  const userId = session.userId;
  const limit = 6;

  const [routinesPaginatedData, error] = await handleAsync(() =>
    getRoutinesUseCase({
      query,
      userId: userId,
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
          <RoutineCard routine={routine} key={routine.id} />
        ))}
      </div>

      {isValidPage && <Pagination totalPages={totalPages} showPage={2} />}
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
