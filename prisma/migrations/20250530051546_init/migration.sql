/*
  Warnings:

  - You are about to drop the column `uuid` on the `Taskc` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `cancelled` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `completed` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `pedding` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ticketId,owner]` on the table `Taskc` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Taskc" DROP CONSTRAINT "Taskc_owner_fkey";

-- DropForeignKey
ALTER TABLE "Taskc" DROP CONSTRAINT "Taskc_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_sectorid_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_owner_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_sectorid_fkey";

-- DropIndex
DROP INDEX "Taskc_uuid_key";

-- DropIndex
DROP INDEX "Ticket_code_key";

-- DropIndex
DROP INDEX "Ticket_uuid_key";

-- DropIndex
DROP INDEX "notification_uuid_key";

-- DropIndex
DROP INDEX "user_uuid_key";

-- AlterTable
ALTER TABLE "Taskc" DROP COLUMN "uuid",
ALTER COLUMN "ticketId" DROP NOT NULL,
ALTER COLUMN "owner" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "code",
DROP COLUMN "uuid";

-- AlterTable
ALTER TABLE "notification" DROP COLUMN "uuid";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "cancelled",
DROP COLUMN "completed",
DROP COLUMN "pedding",
DROP COLUMN "uuid",
ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Taskc_ticketId_owner_key" ON "Taskc"("ticketId", "owner");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_sectorid_fkey" FOREIGN KEY ("sectorid") REFERENCES "sector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_sectorid_fkey" FOREIGN KEY ("sectorid") REFERENCES "sector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Taskc" ADD CONSTRAINT "Taskc_owner_fkey" FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Taskc" ADD CONSTRAINT "Taskc_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_owner_fkey" FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
