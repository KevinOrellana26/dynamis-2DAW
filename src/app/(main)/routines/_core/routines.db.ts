import { prisma } from "@/lib/prisma";

export const getRoutineFromDB = async () => {
    return await prisma.routine.findMany()
}
