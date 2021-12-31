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

router.post("/login", (req, res) => {
  const myPlaintextPassword = req.body.password;

  User.find({ mail: req.body.mail })
    .then((data) => {
      console.log("user ->", user);
      console.log("myPlaintextPassword", myPlaintextPassword);
      console.log("data.password", user.mail);
      const x = JSON.parse(data);
      const user = new User(x);

      bcrypt.compare(myPlaintextPassword, user.password, (err, result) => {
        console.log("result", result);
        console.log("error", err);

        if (result == true) {
          res.json(data);
          res.status(201);
        } else {
          res.status(404);
          res.json({ message: err });
        }
      });
    })
    .catch((err) => {
      res.status(404);
      res.json({ message: err });
    });
});

router.post("/signup", (req, res) => {
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
