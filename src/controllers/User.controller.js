import { UserModel } from '../models/index.js'
import {AsyncHandler, ErrorResponseObject, ResponseObject} from '../utils/index.js'

export const UserRegistration = AsyncHandler(async function (req,res,next) {
    let requestBody = req.body ;
    if( !requestBody || !requestBody["name"] || !requestBody["email"] || !requestBody["password"]){
        throw ErrorResponseObject(400,'Fill the required feild') ;
    }
    let user = new UserModel(requestBody) ;
    await user.save();
    return res.status(200).json(ResponseObject(200, "User created successfully" ))
})