const express = require('express')
const http = require('http')
require('dotenv').config()

const app = express()

http.createServer(function (req, res) {
    console.log('Listening')
    res.end("Hi, i'm running, everthing its ok")
}).listen(3100)

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.CONNECTION_STRING;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);