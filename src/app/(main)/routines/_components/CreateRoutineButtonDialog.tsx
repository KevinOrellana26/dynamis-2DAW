"use client";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Plus } from "@/config/theme.config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateRoutineForm from "./CreateRoutineForm";

export default function CreateRoutineButtonDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {/* // <Dialog> */}
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
          <DialogDescription>Rutina</DialogDescription>
        </DialogHeader>

        {/* Le paso el estado de cierre al formulario */}
        <CreateRoutineForm onCloseDialog={handleClose} />
        {/* <CreateRoutineForm /> */}

        {/* <div className="flex justify-end gap-2"> */}
        {/* <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancelar
          </Button> */}
        {/* <Button
            variant="dynamis"
            // disabled={selectedExercises.length === 0}
            onClick={() => {
              // Lógica para guardar la rutina
              // console.log("Guardar rutina con:", selectedExercises);
              setIsDialogOpen(false);
            }}
          >
            Guardar rutina
          </Button> */}
        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
}
