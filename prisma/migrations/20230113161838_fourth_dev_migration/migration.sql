/*
  Warnings:

  - Made the column `guruId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Schedule` DROP FOREIGN KEY `Schedule_guruId_fkey`;

-- AlterTable
ALTER TABLE `Schedule` MODIFY `guruId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_guruId_fkey` FOREIGN KEY (`guruId`) REFERENCES `Guru`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
