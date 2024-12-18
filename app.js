import express from "express";
import cors from "cors";
import { config } from "dotenv";

config()

const app = express();
const CORS_ORIGIN = process.env.CORS_ORIGIN

app.use(cors({
    origin : CORS_ORIGIN 
}))
app.use(express.json())

export default app ;