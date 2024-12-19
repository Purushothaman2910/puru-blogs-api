import {Router} from 'express';
import {UserRegistration} from '../controllers/User.controller.js'

const UserRouter = Router();

UserRouter.route( '/register' ).post( UserRegistration )

export default UserRouter ;