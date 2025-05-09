/*
  Warnings:

  - A unique constraint covering the columns `[userId,exerciseId]` on the table `favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "favorite_userId_exerciseId_key" ON "favorite"("userId", "exerciseId");
