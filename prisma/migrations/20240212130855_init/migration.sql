-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");
