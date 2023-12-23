-- CreateTable
CREATE TABLE "SouthKoreaImages" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "SouthKoreaImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SouthKoreaImages_url_key" ON "SouthKoreaImages"("url");
