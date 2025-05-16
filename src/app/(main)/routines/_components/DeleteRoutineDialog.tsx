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
import { Delete, Spinner } from "@/config/theme.config";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { RoutineWithExerciseT } from "../_core/routines.db";
import { removeRoutineAction } from "../routines.actions";

type DeleteRoutineDialogParams = {
  routine: RoutineWithExerciseT;
};

export default function DeleteRoutineDialog(params: DeleteRoutineDialogParams) {
  const { id: routineId } = params.routine;
  const { execute, isPending } = useServerAction(removeRoutineAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleDeleteRoutine = async () => {
    console.log("Borrando rutina");
    await execute({ routineId });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"link"}
          size={"icon"}
          className="size-8 hover:text-red-500"
          disabled={isPending}
        >
          {isPending ? (
            <Spinner className="h-8 w-8 animate-spin text-accent-blue" />
          ) : (
            <Delete className="size-6 " />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-accent-blue">
            ¿Estas seguro?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Si decides continuar,eliminaras la
            rutina de tu lista.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-accent-blue hover:bg-blue-800"
            onClick={handleDeleteRoutine}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
