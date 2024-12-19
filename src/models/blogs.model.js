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