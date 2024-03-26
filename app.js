const { MongoClient } = require("mongodb")
const uri = require("./atlas_uri")

console.log(uri)

const client = new MongoClient(uri)

const dbname = "bank"
const connection_name = "accounts"
const accountsCollection = client.db(dbname).collection(connection_name)


const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    } catch (err) {
        console.error(`Error connecting to the database:${err}`);
    }
};



const Main = async () => {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error('Error connecting to the database:${err}');
    } finally {
        await client.close();
    }
};
Main();






