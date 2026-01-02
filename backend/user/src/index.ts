import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import { createClient } from "redis";
import { connectRedis } from "./config/redis.js";

// A : Dot env setup
dotenv.config();


// B : mongodb database setup
connectToDB();


// C : redis setup
connectRedis();


// D : Express setup
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`User service running on port ${port}`);
})

