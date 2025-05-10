"use client";
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
import React, { useState } from "react";
import { RoutineWithExerciseT } from "../_core/routines.db";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Edit } from "@/config/theme.config";

// type EditExerciseInRoutineDialogParams = {
//   className?: string;
//   routine: RoutineWithExerciseT["exerciseRoutine"];
// };

export default function EditExerciseInRoutineDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
        <div className="grid gap-4 py-2">
          {/* CONTROLAR QUE NO SEA UN NÚMERO NEGATIVO */}
          <div className="grid grid-cols-4 items-center gap-2">
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
            onClick={() => setIsDialogOpen(false)}
          >
            Guardar los cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
