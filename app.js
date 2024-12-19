import express from "express";
import cors from "cors";
import { config } from "dotenv";

config()

const app = express();
const CORS_ORIGIN = process.env.CORS_ORIGIN
const API_VERSION = process.env.API_VERSION || 'v1'

app.use(cors({
    origin: CORS_ORIGIN
}))
app.use(express.json())

// ------------------- logger --------------------------------

import morgan from 'morgan';
import { logger } from './src/utils/index.js';
const morganFormat = ':method :url :status :response-time ms';

app.use(morgan(morganFormat, {
    stream: {
        write: (message) => {
            const logObject = {
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3],

            };
            logger.info(JSON.stringify(logObject));
        }
    }
}));



// ------------------------ routers ------------------------------
import { HealthCheckRoutes, UserRoutes } from './src/routes/index.js'

app.use(`/api/${API_VERSION}/`, HealthCheckRoutes)
app.use(`/api/${API_VERSION}/user/` , UserRoutes)


import { ErrorHandler } from './src/middlewares/index.js'
app.use(ErrorHandler)




export default app;