/*
  Warnings:

  - You are about to drop the column `paymentDate` on the `accountsreceivable` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `accountsreceivable` table. All the data in the column will be lost.
  - Added the required column `formOfReceipt` to the `AccountsReceivable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiptDate` to the `AccountsReceivable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `accountsreceivable` DROP COLUMN `paymentDate`,
    DROP COLUMN `paymentMethod`,
    ADD COLUMN `formOfReceipt` VARCHAR(191) NOT NULL,
    ADD COLUMN `receiptDate` DATETIME(3) NOT NULL;
