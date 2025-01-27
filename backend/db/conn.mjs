import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.ATLAS_URL || "";

console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;
try{
    conn = await Client.connect();
    console.log('mongoDB is CONNECTED!!! :)');

}catch(e){
    console.error(e);
}

let db = client.db("users");

export default db;