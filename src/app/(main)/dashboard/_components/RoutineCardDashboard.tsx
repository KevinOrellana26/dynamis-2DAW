import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import React from "react";
import { RoutineWithExerciseT } from "../../routines/_core/routines.db";
import RoutineCard from "../../routines/_components/RoutineCard";
import RoutineCardSkeleton from "../../routines/_components/RoutineCardSkeleton";

type RoutineCardDashboardProps = {
  routines: RoutineWithExerciseT[];
};

export default async function RoutineCardDashboard({
  routines,
}: RoutineCardDashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-7">
      {routines.map((routine) => (
        <RoutineCard routine={routine} key={routine.id} />
      ))}
    </div>
  );
}

export function RoutineCardDashboardSkeleton() {
  const count = 3;
  const array = Array.from({ length: count });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-7">
      {array.map((_, index) => {
        return <RoutineCardSkeleton key={index} />;
      })}
    </div>
  );
}
