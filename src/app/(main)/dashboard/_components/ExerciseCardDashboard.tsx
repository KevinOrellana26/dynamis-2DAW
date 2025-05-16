import ExerciseCard from "../../exercises/_components/ExerciseCard";
import ExerciseCardSkeleton from "../../exercises/_components/ExerciseCardSkeleton";
import { ExerciseT } from "../../exercises/_core/exercises.definitions";

type ExerciseCardDashboardProps = {
  exercises: ExerciseT[];
};

export default function ExerciseCardDashboard({
  exercises,
}: ExerciseCardDashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-7">
      {exercises.map((exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </div>
  );
}

export function ExerciseCardDashboardSkeleton() {
  const count = 4;
  const array = Array.from({ length: count });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-7">
      {array.map((_, index) => {
        return <ExerciseCardSkeleton key={index} />;
      })}
    </div>
  );
}
