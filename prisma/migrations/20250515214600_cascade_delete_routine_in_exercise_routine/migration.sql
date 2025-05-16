/*
  Warnings:

  - The values [GUEST] on the enum `Rol` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `duration` on the `routine` table. All the data in the column will be lost.
  - You are about to drop the column `totalExercises` on the `routine` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `user` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Rol_new" AS ENUM ('USER', 'ADMIN');
ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "user" ALTER COLUMN "role" TYPE "Rol_new" USING ("role"::text::"Rol_new");
ALTER TYPE "Rol" RENAME TO "Rol_old";
ALTER TYPE "Rol_new" RENAME TO "Rol";
DROP TYPE "Rol_old";
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- DropForeignKey
ALTER TABLE "exerciseRoutine" DROP CONSTRAINT "exerciseRoutine_routineId_fkey";

-- AlterTable
ALTER TABLE "routine" DROP COLUMN "duration",
DROP COLUMN "totalExercises";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "emailVerified";

-- AddForeignKey
ALTER TABLE "exerciseRoutine" ADD CONSTRAINT "exerciseRoutine_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "routine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
