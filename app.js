// ANCHOR -- Require Modules --
const express = require("express");
const memberRouter = require("./routes/memberRoute");

// ANCHOR -- Initialize Express --
const app = express();

// SECTION == Global Middle-Ware ==

// ANCHOR -- Initialize Morgan --
// if (process.env.NODE_ENV !== 'production') {
//   app.use(morgan('dev'));
// }

// ANCHOR -- Initialize Parsers --
app.use(express.json({ limit: "10kb" }));

// ANCHOR -- Mounted Routes --
app.use("api/v1/members", memberRouter);

// !SECTION

module.exports = app;
