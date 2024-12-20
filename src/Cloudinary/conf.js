import { config } from "dotenv"
config()

export const CloudConfigs = {
    CLOUD_NAME : process.env.CLOUD_NAME,
    API_KEY: process.env.CLOUD_API_KEY ,
    API_SECRET: process.env.CLOUD_API_SECRET,
}