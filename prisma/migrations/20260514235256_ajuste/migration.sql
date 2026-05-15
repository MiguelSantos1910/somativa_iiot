/*
  Warnings:

  - Added the required column `semsorId` to the `FazendaLocal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fazendaId` to the `Sensores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FazendaLocal" ADD COLUMN     "semsorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sensores" ADD COLUMN     "fazendaId" TEXT NOT NULL;
