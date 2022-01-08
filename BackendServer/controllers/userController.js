const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { json } = require("express");
const saltRounds = 10;

router.get("/", (req, res) => {
  res.send("Hello World! User");
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Login route
router.post("/login", (req, res) => {
  const myPlaintextPassword = req.body.password;

  User.findOne({ mail: req.body.mail })
    .then((data) => {
      const user = new User(data);
      console.log("user ->", user);

      bcrypt.compare(myPlaintextPassword, user.password, (err, result) => {
        console.log("result ->", result);

        if (result == true) {
          res.json(data);
          res.status(201);
        } 
        if (result == false || err) {
          res.status(401);
          res.json({ message: 'email ou mot de passe incorrect' });
        }
      });
    })
    .catch((err) => {
      res.status(404);
      res.json({ message: err });
    });
});

// Register route
router.post("/register", (req, res) => {
  bcrypt.hash("password", saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
    }
    const user = new User({ ...req.body, password: hashedPassword });
    user
      .save()
      .then((data) => {
        res.json(data);
        res.status(201);
      })
      .catch((err) => {
        res.json({ err });
      });
  });
});

router.put("/update-user", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
    }
    const user = new User({ ...req.body, password: hashedPassword });
    user
      .save()
      .then((data) => {
        res.json(data);
        res.status(201);
      })
      .catch((err) => {
        res.json({ err });
      });
  });
});

module.exports = router;
