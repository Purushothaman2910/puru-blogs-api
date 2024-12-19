class ApiError{
    constructor( stausCode , message ,stack){
        this.stausCode = stausCode ,
        this.message = message ,
        this.data = stack ;
        this.success = false
    }
}

function ErrorResponseObject(statusCode = 500 , message = 'somethig went wrong' , stack = []){
    return new ApiError(statusCode,message,stack)
}

export {
    ApiError ,
    ErrorResponseObject 
}