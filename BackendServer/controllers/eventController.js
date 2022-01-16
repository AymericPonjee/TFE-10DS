const express = require("express");
const router = express.Router();
const User = require("../models/Event");

//route pour récuperer la liste des évènements
router.get("/event", (res) => {

  User.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});