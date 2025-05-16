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
        {/* <div className="grid gap-4 py-2"> */}
        {/* CONTROLAR QUE NO SEA UN NÚMERO NEGATIVO */}
        {/* <div className="grid grid-cols-4 items-center gap-2">
            <Label
              htmlFor="name"
              className="text-right text-accent-blue font-bold"
            >
              Series
            </Label>
            <Input id="name" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-2">
            <Label
              htmlFor="repetitions"
              className="text-right text-accent-blue font-bold"
            >
              Repeticiones
            </Label>
            <Input id="repetitions" type="number" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant={"dynamis"}
            onClick={() => handleUpdateExerciseData}
            disabled={isUpdating}
          >
            {isUpdating ? "Guardando los cambios" : "Guardar los cambios"}
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
