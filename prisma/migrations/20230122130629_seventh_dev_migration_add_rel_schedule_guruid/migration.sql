-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_guruId_fkey` FOREIGN KEY (`guruId`) REFERENCES `Guru`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;