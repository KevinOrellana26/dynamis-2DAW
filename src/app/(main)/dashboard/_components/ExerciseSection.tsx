import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import ExerciseCardDashboard, {
  ExerciseCardDashboardSkeleton,
} from "./ExerciseCardDashboard";
import { ExerciseT } from "../../exercises/_core/exercises.definitions";

type ExerciseSectionProps = {
  exercises: ExerciseT[];
};

export default function ExerciseSection({ exercises }: ExerciseSectionProps) {
  const sortedExercises = exercises.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-between my-5 gap-2">
        <h1 className="text-xl text-center md:text-2xl md:text-left font-bold">
          Ejercicios recientes
        </h1>

        <Button variant={"secondary"} className="cursor-pointer" asChild>
          <Link href={"/exercises"}>Ver más</Link>
        </Button>
      </div>

      <Suspense fallback={<ExerciseCardDashboardSkeleton />}>
        <ExerciseCardDashboard exercises={sortedExercises} />
      </Suspense>
    </>
  );
}
