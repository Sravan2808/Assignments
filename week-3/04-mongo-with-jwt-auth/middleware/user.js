// Middleware for handling auth
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config")

function adminMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the admin DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;
  const word = token.split(" ");
  const jwtToken = word[1];
  const decodedValue = jwt.verify(jwtToken,JWT_SECRET);
  if(decodedValue.username){
    req.username = decodedValue.username
    next();
  }
  else{
    res.status(403).json({
        msg:"You are not authenticated"
    })
  }
}

module.exports = adminMiddleware;
