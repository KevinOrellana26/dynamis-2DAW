"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "@/config/theme.config";
import EditExerciseInRoutineForm from "./EditExerciseInRoutineForm";

// type EditExerciseInRoutineDialogParams = {
//   className?: string;
//   routine: RoutineWithExerciseT["exerciseRoutine"];
// };
type EditExerciseInRoutineProps = {
  exerciseId: number;
  series: number;
  repetitions: number;
  routineId: number;
};

export default function EditExerciseInRoutineDialog(
  props: EditExerciseInRoutineProps
) {
  const { exerciseId, series, repetitions, routineId } = props;
  // const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    // <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="dynamis" size={"icon"}>
          <Edit className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-accent-blue">
            Editar Ejercicio
          </DialogTitle>
          <DialogDescription>
            Modifica los nuevos datos para el ejercicio.
          </DialogDescription>
        </DialogHeader>

        {/* CREAR UNA SERVER ACTION CON UN FORMULARIO */}
        <EditExerciseInRoutineForm
          exerciseId={exerciseId}
          repetitions={repetitions}
          series={series}
          routineId={routineId}
        />
      </DialogContent>
    </Dialog>
  );
}
