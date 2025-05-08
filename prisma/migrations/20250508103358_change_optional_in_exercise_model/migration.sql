/*
  Warnings:

  - Made the column `description` on table `Exercise` required. This step will fail if there are existing NULL values in that column.
  - Made the column `executionSteps` on table `Exercise` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Exercise" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "executionSteps" SET NOT NULL;
