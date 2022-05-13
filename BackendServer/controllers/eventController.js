const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

//route pour récuperer la liste des évènements
router.post("/create", (req, res) => {
  const event = new Event({ ...req.body });
  event
    .save()
    .then((data) => {
      res.json(data);
      res.status(201);
    })
    .catch((err) => {
      console.log("[eventController] : error on create", err);
      res.json({ err });
    });
});

module.exports = router;