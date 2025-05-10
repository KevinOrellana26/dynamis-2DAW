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
import { RoutineWithExerciseT } from "../_core/routines.db";
import { RoutineT } from "../_core/routines.definitions";
import { Button } from "@/components/ui/button";
import ExercisesInRoutines from "./ExercisesInRoutines";
import { ScrollArea } from "@/components/ui/scroll-area";

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

      <DialogContent>
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl text-accent-blue text-center">
            {name}
          </DialogTitle>
          <DialogDescription>
            {description}
            {/* Renderizar los ejercicios */}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[250px]">
          <ExercisesInRoutines routine={routine} />
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="dynamis" className="w-full">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
