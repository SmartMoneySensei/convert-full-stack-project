// const express = require("express");
// const router = express.Router();
// const User = require("../models/User.js");

import router from "express/lib/router";


router.get("/", async (req:any, res:any) => {
  try {
    const Users = await User.find();
    console.log(Users);
    res.send(Users);
  } catch (e) {
    console.log(e.message);
    res.send(e);
  }
});

module.exports = router