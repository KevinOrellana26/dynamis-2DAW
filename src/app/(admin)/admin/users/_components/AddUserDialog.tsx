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
import { AddPerson } from "@/config/theme.config";
import AddUserForm from "./AddUserForm";
import { useState } from "react";

export default function AddUserDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
        <AddUserForm onCloseDialog={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
