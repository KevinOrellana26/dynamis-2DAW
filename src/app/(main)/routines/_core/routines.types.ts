import { z } from "zod";

//ESQUEMAS -> enfocado en tipos especificos de datos y esquemas de validación
//que se utilizan en diferentes operaciones relacionadas con las rutinas (CRUD)

//ESQUEMA GENERAL DE RUTINA
export const RoutineSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z
    .string()
    .trim()
    .min(5, {
      message: "El nombre debe tener al menos 5 caracteres.",
    })
    .refine((val) => isNaN(Number(val)), {
      message: "El nombre no puede ser un número.",
    }),
  description: z
    .string()
    .trim()
    .optional()
    .refine((val) => val === "undefined" || val === "" || isNaN(Number(val)), {
      message: "La descripción no puede ser un número.",
    }),
  // duration: z.number().optional(),
  // totalExercises: z.number().optional(),
});

//ESQUEMA PARA EL FORMULARIO
export const CreateRoutineFormSchema = RoutineSchema.pick({
  name: true,
  description: true,
});
export type CreateRoutineFormT = z.infer<typeof CreateRoutineFormSchema>;
//tipo para caso de uso y BD.
export type CreateRoutineUseCaseInput = CreateRoutineFormT & {
  userId: string;
};

//--------------------------------------------------------------------------------------------------------------
//Añadir ejercicio a rutina
export const AddExerciseToRoutineSchema = z.object({
  userId: z.string(),
  exerciseId: z.number(),
});
export type AddExercisesToRoutineT = z.infer<typeof AddExerciseToRoutineSchema>;

//--------------------------------------------------------------------------------------------------------------
//Eliminar ejercicio de rutina
export const RemoveExercisesFromRoutineSchema = AddExerciseToRoutineSchema;
export type RemoveExercisesToRoutineT = z.infer<
  typeof RemoveExercisesFromRoutineSchema
>;

//--------------------------------------------------------------------------------------------------------------
//Actualizar datos de ejercicio en la rutina
export const UpdateExerciseToRoutineSchema = z.object({
  userId: z.string(),
  exerciseId: z.string(),
});
export type UpdateExerciseToRoutineT = z.infer<
  typeof UpdateExerciseToRoutineSchema
>;
