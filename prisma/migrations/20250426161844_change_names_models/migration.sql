/*
  Warnings:

  - You are about to drop the column `musculo` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `ejercicio_id` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `ejercicio_id` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `peso_usado` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `repeticiones` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_creacion` on the `Routine` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Routine` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `Routine` table. All the data in the column will be lost.
  - You are about to drop the `Rutina_ejercicio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `muscle` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercise_id` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercise_id` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repetitions` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight_used` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Routine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_ejercicio_id_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_ejercicio_id_fkey";

-- DropForeignKey
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Routine" DROP CONSTRAINT "Routine_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Rutina_ejercicio" DROP CONSTRAINT "Rutina_ejercicio_ejercicio_id_fkey";

-- DropForeignKey
ALTER TABLE "Rutina_ejercicio" DROP CONSTRAINT "Rutina_ejercicio_rutina_id_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "musculo",
DROP COLUMN "nombre",
ADD COLUMN     "muscle" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "ejercicio_id",
DROP COLUMN "usuario_id",
ADD COLUMN     "exercise_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Progress" DROP COLUMN "ejercicio_id",
DROP COLUMN "fecha",
DROP COLUMN "peso_usado",
DROP COLUMN "repeticiones",
DROP COLUMN "usuario_id",
ADD COLUMN     "date" DATE DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "exercise_id" INTEGER NOT NULL,
ADD COLUMN     "repetitions" INTEGER NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "weight_used" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Routine" DROP COLUMN "fecha_creacion",
DROP COLUMN "nombre",
DROP COLUMN "usuario_id",
ADD COLUMN     "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Rutina_ejercicio";

-- CreateTable
CREATE TABLE "Exercise_routine" (
    "id" SERIAL NOT NULL,
    "routine_id" INTEGER NOT NULL,
    "exercie_id" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,

    CONSTRAINT "Exercise_routine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise_routine" ADD CONSTRAINT "Exercise_routine_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "Routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise_routine" ADD CONSTRAINT "Exercise_routine_exercie_id_fkey" FOREIGN KEY ("exercie_id") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
