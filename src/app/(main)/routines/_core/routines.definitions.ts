import { z } from "zod";

export const RoutineSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  description: z.string(),
  duration: z.number(),
  totalExercises: z.number(),
});

export type RoutineT = z.infer<typeof RoutineSchema>;

// export const routineAdapter = (

// )
