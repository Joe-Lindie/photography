-- CreateTable
CREATE TABLE "FeaturedImages" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "FeaturedImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FeaturedImages_url_key" ON "FeaturedImages"("url");
