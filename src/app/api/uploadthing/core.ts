import { getSession } from "@/app/(auth)/_core/auth/auth.actions";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const file = createUploadthing();

//QUE TIPO DE ARCHIVOS ACEPTAMOS, TAMAÑO MAXIMO, QUE HACER CUANDO SE COMPLETE LA SUBIDA
export const ourFileRouter = {
  imageUploader: file({
    //Solo aceptamos imagenes
    "image/png": { maxFileSize: "4MB", maxFileCount: 1 },
    "image/jpeg": { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const user = await getSession();
      if (!user) throw new UploadThingError("Usuario no autorizado");
      return { user: user };
      //El middleware devuelve el metadata y dentro está el userId.
    })
    .onUploadComplete(async ({ metadata, file }) => {
      //se ejecuta una vez que el archivo se ha subido correctamente.
      console.log(
        "Fichero subido correctamente por el usuario: ",
        metadata.user.name
      );
      console.log("Url del fichero: ", file.ufsUrl);
      return { uploadedBy: metadata.user.name };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
