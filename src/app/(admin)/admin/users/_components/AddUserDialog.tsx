import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddPerson, Edit } from "@/config/theme.config";
import { UserTableT } from "../_core/users.definitions";
import AddUserForm from "./AddUserForm";

export default function AddUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="dynamis">
          <AddPerson className="size-4" />
          Crear usuario
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <AlertDialogHeader>
          <DialogTitle className="text-accent-blue">Crear usuario</DialogTitle>
          <DialogDescription>Crea un nuevo usuario</DialogDescription>
        </AlertDialogHeader>

        {/* CREAR UNA SERVER ACTION CON UN FORMULARIO */}
        <AddUserForm/>
      </DialogContent>
    </Dialog>
  );
}
