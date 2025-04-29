/*
  Warnings:

  - Added the required column `description` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalExercise` to the `Routine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Routine" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "totalExercise" INTEGER NOT NULL;
