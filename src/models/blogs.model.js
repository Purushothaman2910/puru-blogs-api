import { model , Schema } from "mongoose";
import {deletImage} from '../utils/index.js'

const BlogSchema = new Schema({
    slug : {
        type : String ,
        required : [true , 'slug is required feild'] ,
        trim : true 
    } ,
    ownerId : {
        type : Schema.Types.ObjectId ,
        ref : 'user'
    },
    title : {
        type : String ,
        required :[true , "title is a required feild"] ,
        trim : true
    } ,
    content : {
        type : String ,
        required :[true , "content is a required feild"] ,
    } ,
    featuredImage : {
        type : String ,
        trim : true 
    },
    publicId : {
        type : String ,
        trim  : true ,
        required : [function () {return this.featuredImage} , "featured public id is required please fill it"]
    },
    status : {
        type : String,
        enum : ['active' , 'inactive'] ,
        default : 'active'
    }
},{
    timestamps : true
});


BlogSchema.statics.getAllPosts = async function (query = {} , project = {}){
    return this.find(query , project)
}

BlogSchema.statics.getActivePost = async function () {
    await this.find({status : "active"})
}


BlogSchema.methods.setInactive = async function () {
    let blog = this ;
    blog.status = 'inactive' ;
    await blog.save()
    return true ;
}

BlogSchema.methods.deleteFeaturedImage = async function(){
    let document = this ;
    if(!document.featuredImage || !document.publicId){
        return false
    }
    let result = await deletImage(document.publicId) ;
    if(!result){
        return false
    }
    document.featuredImage = '' ;
    document.publicId = '';
    await document.save()
    return true
}

const BlogModel = model('blog',BlogSchema) ;

export default BlogModel ;