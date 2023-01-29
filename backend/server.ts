// dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const bugsController = require("./controllers/bugs_controller")
const usersController = require("./controllers/user_controller")
// PORT AND MONGOOSE CONNECTION
const PORT = process.env.PORT;
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// middleware
app.use(cors()); // prevents cors error
app.use(express.json()); // allows server to parse Json
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

// ROUTES

app.use("/bugs",bugsController)

app.use("/users",usersController)

app.get("*", (req:any, res:any) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Bugtracking at", PORT);
});

