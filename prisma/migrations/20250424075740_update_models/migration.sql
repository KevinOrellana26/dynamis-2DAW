/*
  Warnings:

  - You are about to drop the `Ejercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Favorito` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Progreso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rutina` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorito" DROP CONSTRAINT "Favorito_ejercicio_id_fkey";

-- DropForeignKey
ALTER TABLE "Favorito" DROP CONSTRAINT "Favorito_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Progreso" DROP CONSTRAINT "Progreso_ejercicio_id_fkey";

-- DropForeignKey
ALTER TABLE "Progreso" DROP CONSTRAINT "Progreso_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Rutina" DROP CONSTRAINT "Rutina_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Rutina_ejercicio" DROP CONSTRAINT "Rutina_ejercicio_ejercicio_id_fkey";

-- DropForeignKey
ALTER TABLE "Rutina_ejercicio" DROP CONSTRAINT "Rutina_ejercicio_rutina_id_fkey";

-- DropTable
DROP TABLE "Ejercicio";

-- DropTable
DROP TABLE "Favorito";

-- DropTable
DROP TABLE "Progreso";

-- DropTable
DROP TABLE "Rutina";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progress" (
    "id" SERIAL NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "ejercicio_id" INTEGER NOT NULL,
    "fecha" DATE DEFAULT CURRENT_TIMESTAMP,
    "peso_usado" DOUBLE PRECISION NOT NULL,
    "repeticiones" INTEGER NOT NULL,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routine" (
    "id" SERIAL NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_creacion" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Routine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "ejercicio_id" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "musculo" TEXT NOT NULL,
    "video_img_url" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_ejercicio_id_fkey" FOREIGN KEY ("ejercicio_id") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routine" ADD CONSTRAINT "Routine_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_ejercicio_id_fkey" FOREIGN KEY ("ejercicio_id") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rutina_ejercicio" ADD CONSTRAINT "Rutina_ejercicio_rutina_id_fkey" FOREIGN KEY ("rutina_id") REFERENCES "Routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rutina_ejercicio" ADD CONSTRAINT "Rutina_ejercicio_ejercicio_id_fkey" FOREIGN KEY ("ejercicio_id") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
