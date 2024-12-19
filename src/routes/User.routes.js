import {Router} from 'express';
import {UserRegistration,UserLogin} from '../controllers/User.controller.js'

const UserRouter = Router();

UserRouter.route( '/register' ).post( UserRegistration )
UserRouter.route('/login').post(UserLogin)

export default UserRouter ;