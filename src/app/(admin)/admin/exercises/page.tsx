import { Metadata } from "next";
import AdminExerciseList, {
  AdminExerciseListSkeleton,
} from "./_components/AdminExerciseList";
import { Button } from "@/components/ui/button";
import { SearchParams } from "nuqs/server";
import { adminExercisesSearchParamsCache } from "./_core/admin.exercises.search-params";
import { Suspense } from "react";
import AdminExercisesFilters from "./_components/AdminExercisesFilters";

export const metadata: Metadata = {
  title: "Admin Ejercicios",
};

type AdminExercisesPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function AdminExercisesPage({
  ...props
}: AdminExercisesPageProps) {
  const searchParams = await props.searchParams;
  const parsedSearchParams =
    adminExercisesSearchParamsCache.parse(searchParams);
  const { page, query, selectedMuscle } = parsedSearchParams;

  return (
    <div className="mx-3 px-6 md:px-8 my-8">
      <header className="flex flex-col items-center md:flex-row md:justify-between gap-2">
        <h1 className="font-semibold text-4xl md:text-6xl text-accent-blue dark:text-accent-blue">
          Ejercicios
        </h1>
        <Button variant={"dynamis"}>Añadir ejercicio</Button>
      </header>
      <AdminExercisesFilters />

      <Suspense
        fallback={<AdminExerciseListSkeleton />}
        key={`${query}${selectedMuscle}${page}`}
        // key={new Date().toString()}
      >
        <AdminExerciseList />
      </Suspense>
    </div>
  );
}
