import {BlogModel} from '../models/index.js'
import {AsyncHandler,CheckForRequiredFields,ErrorResponseObject,ResponseObject} from '../utils/index.js'

export const CreatePost = AsyncHandler(async function(req,res,next){
    let requestBody = req.body;
    let file = req.file;
    let requiredFeilds = ["slug" , "ownerId", "title", "content" ]
    if(CheckForRequiredFields(requestBody , ...requiredFeilds)) throw ErrorResponseObject(400,"Enter the required fields");
    let blog = new BlogModel({
        ...requestBody ,
        featuredImage : file.path ,
        publicId : file.filename ,
    })
    await blog.save();
    res.status(200).json(ResponseObject(200,"post created"))
})

export const UpdatePost = AsyncHandler(async function (req,res,next) {
    
})

export const DeletePost = AsyncHandler(async function (req,res,next) {
    const params = req.params ;
    if(CheckForRequiredFields(params , "_id")) throw ErrorResponseObject(400 , "send _id in path params");
    let document = await BlogModel.findById(params["_id"]);
    if(!document) throw ErrorResponseObject(404 , "post not found");
    let result = await document.deleteFeaturedImage();
    if(!result) throw ErrorResponseObject(500,"internal server error")
    await BlogModel.findByIdAndDelete(params["_id"])
    return res.status(200).json(ResponseObject(200,"images deleted"))
})