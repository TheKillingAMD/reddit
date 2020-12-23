//FILENAME : db.js

const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://Ayush:mongodb@reddit-db.xp5qu.mongodb.net/test?authSource=admin&replicaSet=atlas-wlyo24-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
