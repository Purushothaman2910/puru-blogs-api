import app from '../app.js'
import ConnectDataBase from './db/config.js'
import {logger} from './utils/index.js'

const PORT = process.env.PORT || 80 ;
const API_VERSION = process.env.API_VERSION || 'v1'
const DBURL = process.env.DB_URL

ConnectDataBase(DBURL).then(()=>{
    app.listen(PORT , ()=> logger.info(`Api listening to the port http://localhost:${PORT}/api/${API_VERSION}`))
}).catch(()=>{
    logger.info(`Error in connecting databse`) 
})