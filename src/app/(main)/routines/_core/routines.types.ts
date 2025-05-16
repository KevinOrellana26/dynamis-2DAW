// import { z } from "zod";
// import { ExerciseSchema } from "../../exercises/_core/exercises.definitions";

// //ESQUEMAS -> enfocado en tipos especificos de datos y esquemas de validación
// //que se utilizan en diferentes operaciones relacionadas con las rutinas (CRUD)

// //ESQUEMA GENERAL DE RUTINA
// export const CreateRoutineSchema = z.object({
//   id: z.string().optional(),
//   userId: z.string(),
//   name: z
//     .string()
//     .trim()
//     .min(5, {
//       message: "El nombre debe tener al menos 5 caracteres.",
//     })
//     .refine((val) => isNaN(Number(val)), {
//       message: "El nombre no puede ser un número.",
//     }),
//   description: z
//     .string()
//     .trim()
//     .optional()
//     .refine((val) => val === "undefined" || val === "" || isNaN(Number(val)), {
//       message: "La descripción no puede ser un número.",
//     }),
//   // duration: z.number().optional(),
//   // totalExercises: z.number().optional(),
// });

// export type CreateRoutineFormT = z.infer<typeof CreateRoutineSchema>;
// //tipo para caso de uso y BD.
// export type CreateRoutineUseCaseInput = CreateRoutineFormT & {
//   userId: string;
// };

// //--------------------------------------------------------------------------------------------------------------
// // export const ExercisesListSchema = ExerciseSchema.pick({
// //   id: true,
// //   muscle: true,
// //   name: true,
// // });
// // export type ExercisesListT = z.infer<typeof ExercisesListSchema>;

// //--------------------------------------------------------------------------------------------------------------
// //Eliminar rutina
// export const RemoveRoutineSchema = z.object({
//   userId: z.string(),
//   routineId: z.number(),
// });
// export type RemoveRoutineT = z.infer<typeof RemoveRoutineSchema>;

// //--------------------------------------------------------------------------------------------------------------
// //Añadir ejercicio a rutina
// export const AddExerciseToRoutineSchema = z.object({
//   userId: z.string(),
//   routineId: z.number(),
//   exerciseId: z.number(),
//   series: z.number().min(1),
//   repetitions: z.number().min(1),
// });

// export type AddExerciseToRoutineT = z.infer<typeof AddExerciseToRoutineSchema>;

// //--------------------------------------------------------------------------------------------------------------
// //Eliminar ejercicio de rutina
// export const RemoveExercisesFromRoutineSchema = AddExerciseToRoutineSchema;
// export type RemoveExercisesToRoutineT = z.infer<
//   typeof RemoveExercisesFromRoutineSchema
// >;

// //--------------------------------------------------------------------------------------------------------------
// //Actualizar datos de ejercicio en la rutina
// export const UpdateExerciseToRoutineSchema = z.object({
//   userId: z.string(),
//   exerciseId: z.string(),
// });
// export type UpdateExerciseToRoutineT = z.infer<
//   typeof UpdateExerciseToRoutineSchema
// >;
