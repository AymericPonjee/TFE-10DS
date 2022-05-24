const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

//route pour créer des évènements
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

//route pour récupérer la listes des évènements
router.get("/list", (req, res) => {
  console.log(("[Events]: get events"));
  Event.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;