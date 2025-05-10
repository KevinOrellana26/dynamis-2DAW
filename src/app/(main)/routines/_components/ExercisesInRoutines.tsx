import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RoutineWithExerciseT } from "../_core/routines.db";

type ExercisesInRoutinesProps = {
  routine: RoutineWithExerciseT;
};

export default function ExercisesInRoutines({
  routine,
}: ExercisesInRoutinesProps) {
  const { exerciseRoutine, totalExercises } = routine;
  return (
    <Table>
      <TableCaption>Total de Ejercicios: {totalExercises}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Ejercicio</TableHead>
          <TableHead>Músculo</TableHead>
          <TableHead>Series</TableHead>
          <TableHead className="text-right">Repeticiones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {exerciseRoutine.map((exerciseItem) => (
          <TableRow key={exerciseItem.id}>
            <TableCell className="font-medium">
              {exerciseItem.exercise.name}
            </TableCell>
            <TableCell>{exerciseItem.exercise.muscle}</TableCell>
            <TableCell>{exerciseItem.series}</TableCell>
            <TableCell className="text-right">
              {exerciseItem.repetitions}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
