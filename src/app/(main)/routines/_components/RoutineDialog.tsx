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
import { useState } from "react";
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
      <DialogOverlay />

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
