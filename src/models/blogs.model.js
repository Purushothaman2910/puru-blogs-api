import { Schema , model } from "mongoose";

const UserSchema = new Schema({
    name : {
        type : String ,
        required : true ,
        trim : true
    } ,
    email : {
        type : String ,
        required : true ,
        trim : true ,
    },
    password : {
        type : String ,
        required : true ,
        trim : true 
    }
},{
    timestamps : true
});

const UserModel = model(UserSchema , 'user');

export default UserModel ;