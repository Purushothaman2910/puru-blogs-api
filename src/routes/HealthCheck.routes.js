import {Router} from 'express';
import {healthCheck} from '../controllers/HealthCheck.controller.js'

const HealthCheckRouter = Router();

HealthCheckRouter.get('/health-check' , healthCheck )

export default HealthCheckRouter ;  