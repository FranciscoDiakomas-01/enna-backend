-- CreateEnum
CREATE TYPE "statusType" AS ENUM ('Completed', 'Cancelled', 'Pending', 'Working');

-- CreateEnum
CREATE TYPE "priorityType" AS ENUM ('High', 'Medium', 'Low');

-- CreateEnum
CREATE TYPE "userType" AS ENUM ('Admin', 'Tecnic');

-- CreateEnum
CREATE TYPE "notificationType" AS ENUM ('Task', 'Ticket', 'User', 'Other');

-- CreateTable
CREATE TABLE "sector" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "total" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "sector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "sectorid" INTEGER,
    "status" "statusType" NOT NULL DEFAULT 'Pending',
    "priority" "priorityType" NOT NULL DEFAULT 'Low',
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished" TIMESTAMP(3) NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT,
    "type" "userType" NOT NULL DEFAULT 'Tecnic',
    "sectorid" INTEGER,
    "completed" INTEGER NOT NULL DEFAULT 0,
    "cancelled" INTEGER NOT NULL DEFAULT 0,
    "pedding" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taskc" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "status" "statusType" NOT NULL DEFAULT 'Pending',
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "finished" TIMESTAMP(3),

    CONSTRAINT "Taskc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "owner" INTEGER NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "text" TEXT NOT NULL,
    "deeplink" TEXT,
    "message" TEXT NOT NULL,
    "type" "notificationType" NOT NULL DEFAULT 'Other',
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sector_title_key" ON "sector"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_uuid_key" ON "Ticket"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_code_key" ON "Ticket"("code");

-- CreateIndex
CREATE UNIQUE INDEX "user_uuid_key" ON "user"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_tel_key" ON "user"("tel");

-- CreateIndex
CREATE UNIQUE INDEX "Taskc_uuid_key" ON "Taskc"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "notification_uuid_key" ON "notification"("uuid");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_sectorid_fkey" FOREIGN KEY ("sectorid") REFERENCES "sector"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_sectorid_fkey" FOREIGN KEY ("sectorid") REFERENCES "sector"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Taskc" ADD CONSTRAINT "Taskc_owner_fkey" FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Taskc" ADD CONSTRAINT "Taskc_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_owner_fkey" FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
