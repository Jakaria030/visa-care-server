require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb code start
// connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7vwvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // create database
    const visaCollections = client.db('visaCareDB').collection('visas');

    // create visa
    app.post('/visas', async(req, res) => {
      const newVisa = req.body;
      console.log(newVisa);
      const result = await visaCollections.insertOne(newVisa);
      res.send(result);
    });

    // read all visa
    app.get('/visas', async(req, res) => {
      const cursor = visaCollections.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // read single visa
    app.get('/visas/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await visaCollections.findOne(query);
      res.send(result);
    });



    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
// mongodb code end

// connect server
app.get('/', (req, res) => {
    res.send('Visa Care server is running...');
});

app.listen(port, () => {
    console.log(`Visa Care server is running on port: ${port}`);
});