-- CreateTable
CREATE TABLE "user" (
    "clerkid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "DOB" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "sexuality" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "photourl" TEXT,
    "username" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("clerkid")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "clerkid" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "photosurl" TEXT,
    "notes" TEXT,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "clerkid" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
