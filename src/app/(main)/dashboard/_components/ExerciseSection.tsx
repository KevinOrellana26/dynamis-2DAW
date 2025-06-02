import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import ExerciseCardDashboard, {
  ExerciseCardDashboardSkeleton,
} from "./ExerciseCardDashboard";
import { ExerciseT } from "../../exercises/_core/exercises.definitions";
import { ArrowRight } from "@/config/theme.config";

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

        <Link href={"/exercises"}>
          <Button variant={"secondary"} className="cursor-pointer group">
            Ver más <ArrowRight className="group-hover:text-accent-blue ml-1"/>
          </Button>
        </Link>
      </div>

      <Suspense fallback={<ExerciseCardDashboardSkeleton />}>
        <ExerciseCardDashboard exercises={sortedExercises} />
      </Suspense>
    </>
  );
}
