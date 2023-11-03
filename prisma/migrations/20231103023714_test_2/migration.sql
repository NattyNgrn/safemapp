/*
  Warnings:

  - You are about to drop the column `userId` on the `favorites` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkid]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkid` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_userId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "photosurl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "clerkid" TEXT NOT NULL,
ALTER COLUMN "photourl" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_clerkid_key" ON "user"("clerkid");
