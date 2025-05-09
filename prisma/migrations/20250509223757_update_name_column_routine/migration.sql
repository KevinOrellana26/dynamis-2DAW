/*
  Warnings:

  - You are about to drop the column `totalExercise` on the `routine` table. All the data in the column will be lost.
  - Added the required column `totalExercises` to the `routine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routine" DROP COLUMN "totalExercise",
ADD COLUMN     "totalExercises" INTEGER NOT NULL;
