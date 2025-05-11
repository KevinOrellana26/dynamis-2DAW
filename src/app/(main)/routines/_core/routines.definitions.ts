import { z } from "zod";

//DEFINITIONS -> Define la estructura completa de una rutina. Util para describir como se almacenan los datos en la BD
//o como se devuelven desde el backend. Útil para adaptadores o transformación de datos.
export const RoutineSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  description: z.string(),
  duration: z.number(),
  totalExercises: z.number(),
});

export type RoutineT = z.infer<typeof RoutineSchema>;
