/*
  Warnings:

  - Made the column `createdAt` on table `routine` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "routine" ALTER COLUMN "createdAt" SET NOT NULL;
