const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri =
  "mongodb+srv://rakib:rakib1234@cluster0.bbzqc1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoClient setup
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("usersdb");
    const usersCollection = database.collection("users");

    // POST route - Create new user
    app.post("/users", async (req, res) => {
      try {
        const newUser = req.body;
        const result = await usersCollection.insertOne(newUser);
        res.status(201).json({ message: "User added", id: result.insertedId });
      } catch (error) {
        console.error("Insert error:", error);
        res.status(500).json({ message: "Insert failed" });
      }
    });

    // Ping check
    //await client.db("admin").command({ ping: 1 });
    //console.log("Pinged your deployment. Successfully connected to MongoDB!");
  } catch (err) {
    console.error(" Connection error:", err);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(` Server listening on http://localhost:${port}`);
});
