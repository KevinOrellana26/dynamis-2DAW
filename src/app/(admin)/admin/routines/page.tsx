import ExerciseList from "@/app/(main)/routines/_components/ExerciseList";
import RoutineFilters from "@/app/(main)/routines/_components/RoutineFilters";
import { RoutineListSkeleton } from "@/app/(main)/routines/_components/RoutineList";
import { routinesSearchParamsCache } from "@/app/(main)/routines/_core/routines.search-params";
import { Metadata } from "next";
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import AdminRoutineList from "./_components/AdminRoutineList";

export const metadata: Metadata = {
  title: "Admin Rutinas",
};

type AdminRoutinePageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function AdminRoutinesPage({
  ...props
}: AdminRoutinePageProps) {
  const searchParams = await props.searchParams;
  const parsedSearchParams = routinesSearchParamsCache.parse(searchParams);
  const { page, query } = parsedSearchParams;

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      <header className="flex flex-col items-center md:flex-row md:justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl md:text-6xl text-accent-blue dark:text-accent-blue">
            Gestión de Rutinas
          </h1>
        </div>
        <div>
          <ExerciseList />
        </div>
      </header>

      <RoutineFilters />

      {/* Cards */}
      <Suspense fallback={<RoutineListSkeleton />} key={`${query}${page}`}>
        <AdminRoutineList />
      </Suspense>
    </div>
  );
}
