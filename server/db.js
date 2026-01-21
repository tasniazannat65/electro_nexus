import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({path: './server/.env'});

const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;
if(!uri){
  throw new Error('MONGODB_URI is missing');
}
if(!dbname){
  throw new Error('DB_NAME is missing');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const collections = {
  
    ITEMS: 'items'

}



export const dbConnect = async(cname)=>{
    if(!client._connected){
        await client.connect();
        client._connected = true;
    }
    return client.db(dbname).collection(cname);
}