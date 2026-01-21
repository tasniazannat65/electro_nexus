import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

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
    if(!client.topology?.isConnected()){
        await client.connect();
    }
    return client.db(dbname).collection(cname);
}