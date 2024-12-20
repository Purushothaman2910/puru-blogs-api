import { model , Schema } from "mongoose";

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

const BlogModel = model('blog',BlogSchema) ;

export default BlogModel ;