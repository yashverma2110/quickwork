const express = require("express");
const Gig = require("../models/gigs");
const User = require("../models/user");
const router = new express.Router();

router.post("/gig/post", async (req, res) => {
  const user = await User.findByEmail(req.body.email);
  delete req.body.email;
  const gig = new Gig({ ...req.body, owner: user });
  try {
    await gig.save();
    res.status(201).send(gig);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/gig/view/:id", async (req, res) => {
  try {
    const gig = await Gig.findOne({ _id: req.params.id });
    res.status(200).json(gig);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/gig/viewall", async (req, res) => {
  try {
    const gigs = await Gig.find({});
    res.status(200).json(gigs);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/gig/accept/:id", async (req, res) => {
  try {
    const gig = await Gig.findOne({ _id: req.params.id });
    res.status(200).json(gig);
  } catch (e) {
    res.status(500).send();
  }
});
module.exports = router;
