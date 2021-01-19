// ANCHOR -- Require Modules --
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// ANCHOR -- Initialize config --
dotenv.config({
  path: "./config.env",
});

// ANCHOR -- Require App --
const app = require("./app");

// ANCHOR -- Initialize MondoDB --
// 1) declared the mongo database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// 2) connect to the mongo database
mongoose
  .connect(DB, {
    // a. deprecation warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  // Log successful connection
  .then(() => console.log("📡 DB connection successful 📡"));

// ANCHOR -- Listen To Server --
// 1) set the port
const port = process.env.port || 3000;
// 2) Create Listen Handler
const server = app.listen(port, () => {
  console.log(`🏃‍♂️ App running on port ${port} 🏃‍♂️`);
});
