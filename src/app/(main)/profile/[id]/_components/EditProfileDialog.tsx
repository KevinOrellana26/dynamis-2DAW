import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { user } from "@/generated/prisma";
import EditProfileForm from "./EditProfileForm";

export type EditProfileUserT = Omit<
  user,
  "id" | "isEmailVerified" | "createdAt" | "password" | "updatedAt"
>;

type EditProfileDialogProps = {
  className?: string;
  disabled?: boolean;
  user: EditProfileUserT;
  onSuccess?: () => void;
};

export default function EditProfileDialog({
  className,
  disabled,
  user,
  onSuccess,
}: EditProfileDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"dynamis"} className={className} disabled={disabled}>
          Editar Perfil
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xs md:max-w-3xl lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
        </DialogHeader>
        <EditProfileForm user={user} onSuccess={onSuccess} />
      </DialogContent>
    </Dialog>
  );
}
