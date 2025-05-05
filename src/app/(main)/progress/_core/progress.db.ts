import { prisma } from "@/lib/prisma";

export const getProgressFromDB = async () => {
    return await prisma.progress.findMany()
}
