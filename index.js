const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const InitiateMongoServer = require("./config/db");

const CONNECTION_URL = "mongodb+srv://Ayush:mongodb@reddit-db.xp5qu.mongodb.net/test?authSource=admin&replicaSet=atlas-wlyo24-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const DATABASE_NAME = "reddit";

InitiateMongoServer();

var app = Express();

const PORT = process.env.PORT || 4000;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res)
{
res.json({message: "API Working"});
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});