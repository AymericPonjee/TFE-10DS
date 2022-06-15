const express = require("express");
const router = express.Router();
const Anime = require("../models/Anime");

// CreateAnime route
router.post("/create", (req, res) => {
  const anime = new Anime(data);
    anime
      .save()
      .then((data) => {
        res.json(data);
        res.status(201);
      })
      .catch((err) => {
        res.json({ err });
      });
  });

module.exports = router;
