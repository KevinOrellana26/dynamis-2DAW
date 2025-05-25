"use client";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "@/config/theme.config";
import { UserTableT } from "../_core/users.definitions";
import EditUserForm from "./EditUserForm";
import { useState } from "react";

type EditUserDialogProps = {
  user: UserTableT;
};

export default function EditUserDialog(params: EditUserDialogProps) {
  const { user } = params;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="dynamis" size={"icon"}>
          <Edit className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <AlertDialogHeader>
          <DialogTitle className="text-accent-blue">Editar usuario</DialogTitle>
          <DialogDescription>
            Modifica los nuevos datos para el usuario {user.name}.
          </DialogDescription>
        </AlertDialogHeader>

        {/* CREAR UNA SERVER ACTION CON UN FORMULARIO */}
        <EditUserForm
          user={{ id: user.id, name: user.name, role: user.role }}
          onCloseDialog={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
}
