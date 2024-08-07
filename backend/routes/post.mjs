import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//Get all the records.

router.get("/", async (req, res) => {
    let connection= await db.collection("posts");

let results = await collection.find({}).toArray();
res.send(results).status(200);



});

// Create a new record 

router.post("/upload", async (req, res)=>{
    let newDocument = {
        user: req.body.user,
        content: req.body.content,
        Image: req.body.Image
    };
    let collection = await db.collection("posts");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);


})