const express = require("express");
const router = express.Router();
const Anime = require("../models/Anime");

// CreateAnime route
router.post("/create", (req, res) => {
  const anime = new Anime(req.body);
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

//route pour supprimer un animé associé à l'id
router.delete("/:idAnime", (req, res) => {
  Anime.findByIdAndDelete(req.params.idAnime)
    .then((anime) => {
      res.json(anime);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// list route
router.get("/list", (req, res) => {
  console.log("[list] req.query.section ", req.query.section);
  Anime.find({ section: { $in: req.query.section } })
    .then((data) => {
      res.json(data);
      res.status(200);
    })
    .catch((err) => {
      res.json({ err });
    });
});

//route pour modifier un anime associé à l'id
router.put("/:idAnime", (req, res) => {
  console.log("req.body ->", req.body);
  console.log("idAnime ->", req.params.idAnime);

  Anime.findByIdAndUpdate(
    req.params.idAnime,
    {
      ...req.body,
    },
    { new: true }
  )
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
