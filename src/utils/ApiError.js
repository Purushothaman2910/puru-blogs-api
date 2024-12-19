class ApiError{
    constructor( stausCode , message , data ){
        this.stausCode = stausCode ,
        this.message = message ,
        this.success = false
    }
}

function ErrorResponseObject(statusCode = 500 , message = 'somethig went wrong'){
    return new ApiError(statusCode,message,data)
}

export {
    ApiError ,
    ErrorResponseObject 
}