//SOLO interactua con la base de datos

import { NotFoundError } from "@/app/_shared/errors";
import { Exercise } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export const getExercises = async () => {
    let exercises: Exercise[]
    try {
        exercises = await prisma.exercise.findMany()
    } catch (error) {
        console.log("Error", error)
        const message = "No se han encontrado ejercicios."
        throw new Error(message)
    }

    if (exercises.length <= 0) {
        const message = "No se han encontrado ejercicios"

        throw new NotFoundError(message)
    }
    return exercises
}

export const getExerciseFavorite = async () => {
}

export const getExerciseById = async (id: number) => {
    return await prisma.exercise.findUnique({ where: { id } })
}

