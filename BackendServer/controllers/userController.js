const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

function signToken(mail) {
  return jwt.sign({ mail }, process.env.JWT_PRIVATE_KEY);
}

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
  console.log(`[Login]: tentative de connexion { mail: ${req.body.mail} }`)
  const myPlaintextPassword = req.body.password;

  User.findOne({ mail: req.body.mail })
    .then((data) => {
      const user = new User(data);
      
      bcrypt.compare(myPlaintextPassword, user.password, (err, result) => {
        if (result == true) {          
          const token = signToken(user.mail, user.password);
          //res.json({...data, token});
          //res.json(data);
          res.json(token);
          res.status(201);
        } 
        if (result == false || err) {
          res.status(401);
          res.json({ message: 'email ou mot de passe incorrect' });
        }
      });
    }).catch((err) => {
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
