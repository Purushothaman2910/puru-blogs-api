import { Schema , model } from "mongoose";
import bcrypt from 'bcryptjs'

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

async function hashPassword(passWord){
    let saltRounds = 10 ;
    return await bcrypt.hash(passWord , saltRounds)
}

UserSchema.pre('save' ,async function (next) {
    try { 
        let user = this ;
        if(user.isModified('password')) {
            user.password = await hashPassword(user.password) ;
        }
        next()
    } catch (error) {
        next(error)
    }
})

const UserModel = model('user',UserSchema);

export default UserModel ;