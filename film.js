const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require("mongodb")

const app = express()
const port = 3000

const uri = require("./atlas_uri")
const client = new MongoClient(uri)
const dbname = "sample_mflix"
const connection_name = "movies"
let moviesCollection;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
        moviesCollection = client.db(dbname).collection(connection_name);
    } catch (err) {
        console.error(`Error connecting to the database:${err}`);
    }
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    connectToDatabase(); // Connect to the database when the server starts
});

app.get('/', (req, res) => {
    res.send('Hello World! ')
});

app.put('/hala', (req, res) => {
    const { data1, data2 } = req.body;
    const toShow = { 'imdb.rating': { $gte: data1, $lt: data2 } };
    moviesCollection.find(toShow).toArray()
        .then((result) => {
            console.log(toShow);
            res.send(result);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error occurred while fetching data.");
        });
});

