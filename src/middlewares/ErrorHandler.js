import {ApiError, ErrorResponseObject} from '../utils/index.js'

const ErrorHandler = (err,req,res,next) => {
    if(err instanceof ApiError){
        return res.status(err.stausCode).json(err)
    }else{
        return res.status(500).json(ErrorResponseObject(500,err.message,err.stack))
    }
}

export default ErrorHandler