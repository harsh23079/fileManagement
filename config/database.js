const mongoose = require("mongoose");
require("dotenv").config();

const database = () =>
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("database connected..."))
    .catch((err) => console.log(err.message));
module.exports = database;
