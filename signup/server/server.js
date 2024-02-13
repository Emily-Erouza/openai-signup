const express = require('express');
const mongoose = require('mongoose');
const dotenv =require('dotenv').config()

const { signup } = require("./controllers/signup");
const  userModel = require("./models/Schemas");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

const uri = "https://api.openai.com/v1/chat/completions";






app.get("/api/openai.com", (req, res) => {
   userModel.find({}).then(function(user){
      res.status(202).json(user)
    }).catch(function(err){
      console.log(err)
    })
  });
  
  app.post("/api/openai.com", async (req, res) => {
    console.log(req.body)
    userModel.create(req.body)
    res.send()
  });


app.listen(3004,() => console.log(`server is running `));