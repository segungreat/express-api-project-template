import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../prisma-client/client';

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 5
});
// const prisma = new PrismaClient({ adapter });
const prisma = new PrismaClient({accelerateUrl: process.env.DATABASE_URL});

async function startDB(services?: Function[]) {
    try {
        await prisma.$connect();
        console.log("Database connection established!");
        // run all service function
        for (let service of services) { await service() }

    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

export { prisma, startDB }