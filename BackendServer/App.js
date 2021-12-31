const express = require('express')
const mongoose = require('mongoose')

require("dotenv/config");

const app = express()
const port = 3000;

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const userControlleur = require('./controllers/userController');
app.use('/Users', userControlleur);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("[DB]: connected");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})