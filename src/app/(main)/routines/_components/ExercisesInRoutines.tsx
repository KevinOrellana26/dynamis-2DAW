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
import { Button } from "@/components/ui/button";
import EditExerciseInRoutineDialog from "./EditExerciseInRoutineDialog";
import RemoveExerciseInRoutineDialog from "./RemoveExerciseInRoutineDialog";
import { Delete, Edit } from "@/config/theme.config";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <TableHeader className="sticky top-0 z-10 bg-background">
        <TableRow>
          <TableHead className="w-[100px] text-accent-blue font-bold">
            Ejercicio
          </TableHead>
          <TableHead className="text-accent-blue font-bold text-center">
            Músculo
          </TableHead>
          <TableHead className="text-accent-blue font-bold text-center">
            Series
          </TableHead>
          <TableHead className="text-accent-blue font-bold text-center">
            Repeticiones
          </TableHead>
          <TableHead className="text-accent-blue font-bold text-center">
            Acciones
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {exerciseRoutine.map((exerciseItem) => (
          <TableRow key={exerciseItem.id}>
            <TableCell className="font-bold text-accent-blue">
              {exerciseItem.exercise.name}
            </TableCell>
            <TableCell className="text-center">
              {exerciseItem.exercise.muscle}
            </TableCell>
            <TableCell className="text-center">{exerciseItem.series}</TableCell>
            <TableCell className="text-center">
              {exerciseItem.repetitions}
            </TableCell>
            <TableCell>
              <div className="flex flex-row gap-2 items-center justify-center">
                <EditExerciseInRoutineDialog />
                <RemoveExerciseInRoutineDialog />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
