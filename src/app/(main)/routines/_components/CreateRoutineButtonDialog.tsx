"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "@/config/theme.config";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ExerciseT } from "../_core/routines.definitions";
import CreateRoutineForm from "./CreateRoutineForm";

type CreateRoutineButtonDialogProps = {
  exercisesList: ExerciseT[];
  className?: string;
};

export default function CreateRoutineButtonDialog(
  props: CreateRoutineButtonDialogProps
) {
  const { exercisesList, className } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="dynamis" className="gap-2">
          <Plus className="h-4 w-4" />
          Crear nueva rutina
        </Button>
      </DialogTrigger>

      <DialogOverlay />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear nueva rutina de ejercicios</DialogTitle>
          <DialogDescription>
            Selecciona los ejercicios para tu rutina.
          </DialogDescription>
        </DialogHeader>

        {/* renderizo el formulario */}
        <CreateRoutineForm exercisesList={exercisesList} onCloseDialog={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
