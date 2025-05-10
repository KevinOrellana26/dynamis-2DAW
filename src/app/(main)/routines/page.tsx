import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import RoutineFilters from "./_components/RoutineFilters";
import RoutineList, { RoutineListSkeleton } from "./_components/RoutineList";
import { routinesSearchParamsCache } from "./_core/routines.search-params";
import NewRoutineButton from "@/app/(main)/routines/_components/NewRoutineButton";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function RoutinePage({ ...props }: PageProps) {
  const searchParams = await props.searchParams;
  const parsedSearchParams = routinesSearchParamsCache.parse(searchParams);
  const { query, page } = parsedSearchParams;

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      {/* Titulo y botón añadir rutina */}
      <header className="flex flex-col items-center md:flex-row md:justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-accent-blue dark:text-accent-blue">
            Mis Rutinas
          </h1>
          <p className="font-semibold text-muted-foreground text-xl mt-2">
            Gestiona y crea tus rutinas.
          </p>
        </div>
        {/* Solo para ADMIN */}
        <div>
          <NewRoutineButton />
        </div>
      </header>

      <RoutineFilters />

      {/* Cards */}
      <Suspense fallback={<RoutineListSkeleton />} key={`${query}${page}`}>
        <RoutineList />
      </Suspense>
    </div>
  );
}
