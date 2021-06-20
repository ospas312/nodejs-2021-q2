import { createConnection, getConnection } from 'typeorm';
import config from './common/ormconfig';

export const connectDB = async () => {
    let connection;

    try {
        connection = await getConnection()
    } catch(err) {
        //
    }
    try {
        if (connection){
            if (connection && !connection.isConnected) {
               await connection.connect()
            }
        }else {
            await createConnection(config)
        }
        console.log('Connect to DB!!!')
    } catch(err){
        console.error('Connection error2', err);
    }
}

/* export const TryDbConnect = async (cb: () => void) => {
    try {
        await connectDB();
        cb();
    } catch(err) {

        console.error('DB connection error', err);
    }
} */