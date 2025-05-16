/*
  Warnings:

  - Added the required column `totalExercises` to the `routine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routine" ADD COLUMN     "totalExercises" INTEGER NOT NULL;
