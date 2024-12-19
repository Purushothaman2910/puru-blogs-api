import { UserModel } from '../models/index.js'
import {AsyncHandler, ErrorResponseObject, ResponseObject, CreateJwtToken} from '../utils/index.js'

export const UserRegistration = AsyncHandler(async function (req,res,next) {
    let requestBody = req.body ;
    if( !requestBody || !requestBody["name"] || !requestBody["email"] || !requestBody["password"]){
        throw ErrorResponseObject(400,'Fill the required feild') ;
    }
    let user = new UserModel(requestBody) ;
    await user.save();
    return res.status(200).json(ResponseObject(200, "User created successfully" ))
})

export const UserLogin = AsyncHandler(async function (req,res,next) {
    let requestBody = req.body ;
    if(!requestBody || !requestBody["email"] || !requestBody["password"]) throw ErrorResponseObject(400 , 'Fill the required feilds')
    let user = await UserModel.findByEmail(requestBody["email"])
    if(!user){
        throw ErrorResponseObject(404 , "User not found")        
    }
    let isValidUser = await user.validatePassword(requestBody["password"])
    if(!isValidUser){
        throw ErrorResponseObject(401 , "Invalid password")
    }
    let token = await CreateJwtToken({_id:user._id , name : user.name , email : user.email})
    res.status(200).json(ResponseObject(201,"User found",{token}))
})