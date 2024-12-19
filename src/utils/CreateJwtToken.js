import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'santa'


export function CreateJwtToken(payLoad){
    return jwt.sign(payLoad,JWT_SECRET)
}