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
/* Middlewares */
const LoggerMiddleware = require('./middleware/loggerMiddleware')
const AuthMiddleware = require("./middleware/authMiddleware");

/* Routes */
const userControlleur = require('./controllers/userController');
const eventControlleur = require("./controllers/eventController");
const animeControlleur = require("./controllers/animeController");
const shopControlleur = require("./controllers/shopController");

/* middlewares */
app.use(LoggerMiddleware);
app.use(AuthMiddleware);

/* routes */
app.use('/Users', userControlleur);
app.use("/Events", eventControlleur);
app.use("/Animes", animeControlleur);
app.use("/Shop", shopControlleur);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("[DB]: connected");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})