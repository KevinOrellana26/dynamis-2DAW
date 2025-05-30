"use client";
import { UploadButton } from "@/components/UploadThingClient";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { updateAvatarAction } from "../profile.actions";
import { Button } from "@/components/ui/button";

export default function UploadAvatarProfile() {
  const { execute } = useServerAction(updateAvatarAction, {
    onSuccess: ({ data: message }) => {
      toast.success(message);
    },
    onError: ({ err }) => {
      toast.error(err.message);
    },
  });

  return (
    <UploadButton
      endpoint="imageUploader"
      className="ut-button:bg-accent-blue ut-button:hover:bg-blue-800 ut-button:ut-label:text-white ut-button:h-[37px] ut-button:text-sm"
      content={{
        button: ({ isUploading }) =>
          isUploading ? "Subiendo..." : "Añadir avatar",
      }}
      onClientUploadComplete={(res) => {
        const avatarUrl = res[0]?.ufsUrl;
        if (!avatarUrl) return;
        execute({ avatar: res[0].ufsUrl });
      }}
      onUploadError={(error: Error) => {
        console.log("Error:", error.message);
        toast.error("Error al actualizar el avatar.");
      }}
    />
  );
}
