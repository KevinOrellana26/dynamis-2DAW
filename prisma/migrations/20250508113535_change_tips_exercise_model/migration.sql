/*
  Warnings:

  - Made the column `tips` on table `exercise` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "exercise" ALTER COLUMN "tips" SET NOT NULL;
