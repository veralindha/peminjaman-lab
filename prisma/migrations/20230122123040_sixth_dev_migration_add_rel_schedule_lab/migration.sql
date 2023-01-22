-- DropIndex
DROP INDEX `Schedule_guruId_fkey` ON `Schedule`;

-- DropIndex
DROP INDEX `Schedule_labId_fkey` ON `Schedule`;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_labId_fkey` FOREIGN KEY (`labId`) REFERENCES `Lab`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
