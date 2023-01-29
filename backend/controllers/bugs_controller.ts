// const express = require("express");
const router = require("express").Router();
const Bug = require('../models/bug')
// const User = require("../models/User");

// Create bug route
router.post("/", async (req:any, res:any) => {
    try {
        const Bugs:any = await Bug.create(req.body);
        // res.redirect("/bugs");
        console.log(Bugs);
        res.send(Bugs);
    } catch (e:any) {
        console.log(e.message);
        res.send(e)
    }
});
// Update specific bug
router.put("/:id", async (req:any, res:any) => {
  try {
    const Bugs:any = await Bug.findByIdAndUpdate(req.params.id,req.body);
    // res.redirect("/bugs");
    console.log(Bugs);
    res.send(Bugs);
  } catch (e:any) {
    console.log(e.message);
    res.send(e);
  }
});
// get all bugs
router.get("/", async (req:any, res:any) => {
  try {
    const Bugs:any = await Bug.find();
    console.log(Bugs);
    res.redirect(Bugs);
  } catch (e:any) {
    console.log(e.message);
    res.send(e);
  }
});

router.get("/low", async (req:any, res:any) => {
  try {
    const Bugs:any = await Bug.find({ priority: "Low" });
    console.log(Bugs);
    res.send(Bugs);
  } catch (e:any) {
    console.log(e.message);
    res.send(e);
  }
});

router.get("/medium", async (req:any, res:any) => {
  try {
    const Bugs:any = await Bug.find({priority: "Medium"});
    console.log(Bugs);
    res.send(Bugs);
  } catch (e:any) {
    console.log(e.message);
    res.send(e);
  }
});
  // Get all HIGH PRIORITY bugs
  router.get("/high", async (req:any, res:any) => {
    try {
      const Bugs:any = await Bug.find({ priority: "High"});
      console.log(Bugs);
      res.send(Bugs);
    } catch (e:any) {
      console.log(e.message);
      res.send(e);
    }
  });

  // Delete specific bug
router.delete("/delete/:bugId", async (req:any,res:any)=>{
    try {
        const foundBug:any  = await Bug.findByIdAndDelete(req.params.bugId);
        console.log(foundBug);  
    }catch (e:any){console.log(e.message); res.send(e);}
})

// get specific bug
router.get("/:bugId", async (req:any, res:any) => {
  try {
    const foundBug:any = await Bug.findById(req.params.bugId);
    console.log(foundBug);
    res.send(foundBug);
  } catch (e:any) {
    console.log(e.message);
    res.send(e);
  }
});

module.exports = router