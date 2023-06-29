-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "BusinessName" TEXT NOT NULL,
    "BusinessAddress1" TEXT NOT NULL,
    "BusinessAddress2" TEXT NOT NULL,
    "BusinessAddress3" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "Products" TEXT NOT NULL,
    "Customerid" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Price" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
