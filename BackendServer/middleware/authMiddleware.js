var jwt = require("jsonwebtoken");

const authorizedRoutes = ["/Users/login", "/Users/register"];

const VerifyTokenMiddleware = (req, res, next) => {
  const bearerHeader =
    req.headers["authorization"] || req.headers["Authorization"];

  if (authorizedRoutes.includes(req.url)) {
    next();
  } else if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
      if (err) {
        console.log("[JWT.verify]: Err =>", err);
      }
      if (decoded) {
        console.log("[JWT.verify]: decoded =>", decoded);
        next();
      }
    });
    //next();
  } else {
    res.sendStatus(403);
  }
};

module.exports = VerifyTokenMiddleware;
