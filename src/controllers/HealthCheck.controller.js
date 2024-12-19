import { AsyncHandler, ResponseObject } from '../utils/index.js'

export const healthCheck = AsyncHandler(async (req,res,next) => {
    return res.status(200).json(ResponseObject())
})