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
import { Spinner, Trash } from "@/config/theme.config";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { deleteProfileAction } from "../profile.actions";

type DeleteProfileDialogProps = {
  userId: string;
  className?: string;
};
export default function DeleteProfileDialog({
  userId,
  className,
}: DeleteProfileDialogProps) {
  const router = useRouter();

  const { execute, isPending } = useServerAction(deleteProfileAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
      router.push("/");
      router.refresh();
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  const handleDeleteProfile = async () => {
    console.log("Borrando rutina");
    await execute({ userId });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className={className}>
        <Button
          variant={"link"}
          size={"icon"}
          className="text-red-700 hover:text-red-500"
          disabled={isPending}
        >
          {isPending ? (
            <Spinner className="h-8 w-8 animate-spin text-accent-blue" />
          ) : (
            <Trash className="size-6 " />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-accent-blue">
            ¿Eliminar usuario?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-accent-blue hover:bg-blue-800"
            onClick={handleDeleteProfile}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
