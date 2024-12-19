class ApiResponse{
    constructor(statusCode , message , data ){
        this.statusCode = statusCode ,
        this.message = message ,
        this.data = data
        this.success = statusCode < 400 
    }
}

function ResponseObject(statusCode = 200 , message = "success" ,data = [] ){
    return new ApiResponse(statusCode,message,data)
}

export {
    ResponseObject ,
    ApiResponse
}