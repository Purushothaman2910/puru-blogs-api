import app from '../app.js'
import ConnectDataBase from './db/config.js'

const PORT = process.env.PORT || 80 ;
const DBURL = process.env.DB_URL

ConnectDataBase(DBURL).then(()=>{
    app.listen(PORT , ()=> console.log(`api listening to the port http://localhost:${PORT}`))
}).catch(()=>{
   console.log(`Error in connecting databse`) 
})