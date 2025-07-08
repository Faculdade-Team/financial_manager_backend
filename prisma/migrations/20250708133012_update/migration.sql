/*
  Warnings:

  - Added the required column `value` to the `AccountsPayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `AccountsReceivable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AccountsPayable` ADD COLUMN `value` DOUBLE NOT NULL DEFAULT 0;
ALTER TABLE `AccountsReceivable` ADD COLUMN `value` DOUBLE NOT NULL DEFAULT 0;
