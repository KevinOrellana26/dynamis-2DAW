"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import EditPasswordProfileForm from "./EditPasswordProfileForm";

type EditPasswordProfileDialogProps = {
  className?: string;
  disabled?: boolean;
};

export default function EditPasswordProfileDialog({
  className,
  disabled,
}: EditPasswordProfileDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={"dynamis"} className={className} disabled={disabled}>
          Cambiar contraseña
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xs md:max-w-2xl lg:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Cambiar contraseña</DialogTitle>
        </DialogHeader>
        <EditPasswordProfileForm onCloseDialog={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
