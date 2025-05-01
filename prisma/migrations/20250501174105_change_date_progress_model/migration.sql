/*
  Warnings:

  - You are about to drop the column `exercie_id` on the `Exercise_routine` table. All the data in the column will be lost.
  - Added the required column `exercise_id` to the `Exercise_routine` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `Progress` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Exercise_routine" DROP CONSTRAINT "Exercise_routine_exercie_id_fkey";

-- AlterTable
ALTER TABLE "Exercise_routine" DROP COLUMN "exercie_id",
ADD COLUMN     "exercise_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Progress" ALTER COLUMN "date" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Exercise_routine" ADD CONSTRAINT "Exercise_routine_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
