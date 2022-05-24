const express = require("express");
const router = express.Router();
const Shop = require("../models/Shop");

//route pour créer des items pour la boutique
router.post("/create", (req, res) => {
  const shop = new Shop({ ...req.body });
  shop
    .save()
    .then((data) => {
      res.json(data);
      res.status(201);
    })
    .catch((err) => {
      console.log("[shopController] : error on create", err);
      res.json({ err });
    });
});

module.exports = router;
