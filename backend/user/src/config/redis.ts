import { createClient } from "redis";

if (!process.env.REDIS_URL) {
    throw new Error("REDIS_URL is not defined in environment variables");
}


export const redisClient = createClient({
    url: process.env.REDIS_URL
});


export const connectRedis = async () => {

    try {

        await redisClient.connect();
        console.log("Upstash Redis Connected!");

    } catch (err) {

        console.error("Redis connection failed:", err);
        process.exit(1);

    }
};