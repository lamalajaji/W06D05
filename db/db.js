const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dotenv = require("dotenv");
dotenv.config();

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
