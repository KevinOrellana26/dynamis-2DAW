import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/app/api/uploadthing/core";

//Exportamos la ruta para APP Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
