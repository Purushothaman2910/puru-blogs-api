import { connect } from 'mongoose';

async function ConnectDataBase(URL) {
   connect(URL) ;
}  

export default ConnectDataBase ;