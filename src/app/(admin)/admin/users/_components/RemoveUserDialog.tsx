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
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { deleteUserAction } from "../users.actions";

type RemoveUserDialogProps = {
  userId: string;
};

export default function RemoveUserDialog({ userId }: RemoveUserDialogProps) {
  const { execute, isPending } = useServerAction(deleteUserAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleRemoveUser = async () => {
    await execute({ userId });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white" size={"icon"}>
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
            el usuario.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-accent-blue hover:bg-blue-800"
            onClick={handleRemoveUser}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
