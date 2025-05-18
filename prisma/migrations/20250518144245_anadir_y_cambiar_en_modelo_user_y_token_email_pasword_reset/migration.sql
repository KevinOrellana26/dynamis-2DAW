/*
  Warnings:

  - You are about to drop the column `emailTokenExpires` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerificationToken` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetExpires` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `passwordResetToken` on the `user` table. All the data in the column will be lost.
  - Added the required column `type` to the `token` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('emailVerification', 'passwordRest');

-- AlterTable
ALTER TABLE "token" ADD COLUMN     "type" "TokenType" NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "emailTokenExpires",
DROP COLUMN "emailVerificationToken",
DROP COLUMN "passwordResetExpires",
DROP COLUMN "passwordResetToken";
