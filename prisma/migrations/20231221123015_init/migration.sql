-- CreateTable
CREATE TABLE "HomepageCarouselImages" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "HomepageCarouselImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomepageCarouselImages_url_key" ON "HomepageCarouselImages"("url");
