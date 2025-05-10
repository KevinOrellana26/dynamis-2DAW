import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RoutineWithExerciseT } from "../_core/routines.db";
import ExercisesInRoutines from "./ExercisesInRoutines";

type RoutineDialogParams = {
  className?: string;
  routine: RoutineWithExerciseT;
};

export default function RoutineDialog({
  className,
  routine,
}: RoutineDialogParams) {
  const { name, description } = routine;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"dynamis"} className={className}>
          Ver Ejercicios
        </Button>
      </DialogTrigger>

      {/* Implementación del DialogOverlay */}
      <DialogOverlay className="bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

      <DialogContent className="w-full sm:max-w-3xl">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl text-accent-blue text-center">
            {name}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <ExercisesInRoutines routine={routine} />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="dynamis" className="w-full">
              Volver
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
