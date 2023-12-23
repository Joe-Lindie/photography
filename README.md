## Photography Blog

Welcome to my Photography Blog, a platform for sharing images and practicing my Fullstack development skills

## Tech Stack

This is a Fullstack app built with:

- Next.js (version 14)
- Tailwind CSS
- Prisma / Postgres
- Amazon S3 bucket

**Note:** I am using Vercel's free Postgres storage tier. I have exceeded the limits, so I am retrieving the image from Amazon's S3 bucket directly rather than the database.

## Deployed Environment

I deployed to Vercel. See the deployed environment [here](https://photography-steel.vercel.app/)

## Getting Started

Follow these steps to get the Photography Blog up and running on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Git: [Download and install Git](https://git-scm.com/)

### Installation

1. Clone the project repository to your local machine using Git:
2. cd into the project directory
3. run `npm install` to install project dependencies
4. create a `.env` file in the root and add:

   - AWS_ACCESS_KEY_ID = AWS_ACCESS_KEY_ID
   - SECRET_ACCESS_KEY = SECRET_ACCESS_KEY
   - AWS_REGION = AWS_REGION
   - POSTGRES_URL="\*\*\*\*"
   - POSTGRES_PRISMA_URL="\*\*\*\*"
   - POSTGRES_URL_NON_POOLING="\*\*\*\*"
   - POSTGRES_USER="\*\*\*\*"
   - POSTGRES_HOST="\*\*\*\*"
   - POSTGRES_PASSWORD="\*\*\*\*"
   - POSTGRES_DATABASE="\*\*\*\*"

5. Apply database migrations `npx prisma migrate dev`
6. Run `npx prisma migrate deploy` to deploy the migrations to the postgres database

### Notes: Prima Information

To run the node script, run `npx node fileName.mjs`. Prisma has a built in tool to see the tables you have created. You can run `npx prisma studio` to open the modal. Finally, you can format Prisma by running `npx prisma format`
