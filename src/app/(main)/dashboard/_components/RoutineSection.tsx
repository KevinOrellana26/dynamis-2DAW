import { Suspense } from "react";
import RoutineCardSkeleton from "../../routines/_components/RoutineCardSkeleton";
import { RoutineWithExerciseT } from "../../routines/_core/routines.db";
import RoutineCardDashboard from "./RoutineCardDashboard";

type RoutineSectionProps = {
  routines: RoutineWithExerciseT[];
};

export default function RoutineSection({ routines }: RoutineSectionProps) {
  const sortedRoutines = routines.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <>
      <h1 className="text-xl text-center md:text-2xl md:text-left font-bold my-5">
        Mis rutinas
      </h1>

      <Suspense fallback={<RoutineListSkeleton />}>
        <RoutineCardDashboard routines={sortedRoutines} />
      </Suspense>
    </>
  );
}

export function RoutineListSkeleton() {
  const count = 3;
  const array = Array.from({ length: count });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-7">
        {array.map((_, index) => {
          return <RoutineCardSkeleton key={index} />;
        })}
      </div>
    </>
  );
}
