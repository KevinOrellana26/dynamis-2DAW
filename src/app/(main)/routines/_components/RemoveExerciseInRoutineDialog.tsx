"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Delete } from "@/config/theme.config";
import React from "react";
import { useServerAction } from "zsa-react";
// import { removeExerciseFromRoutineAction } from "../routines.actions";
import { toast } from "sonner";

export default function RemoveExerciseInRoutineDialog() {
  // ELIMINAR EJERCICIO DE LA RUTINA
  // const { execute: removeExercise, isPending: isDeleting } = useServerAction(
  //   removeExerciseFromRoutineAction,
  //   {
  //     onSuccess: ({ data: message }) => {
  //       toast.success(message);
  //     },
  //     onError: ({ err }) => {
  //       toast.error(err.message);
  //     },
  //   }
  // );

  const handleRemoveExerciseToRoutine = async () => {
    // await execute({ exerciseId });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} size={"icon"}>
          <Delete className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-accent-blue">
            ¿Estas seguro?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Si decides continuar, eliminarás
            el ejercicio de la rutina.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-accent-blue hover:bg-blue-800"
            onClick={handleRemoveExerciseToRoutine}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
