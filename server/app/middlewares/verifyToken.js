const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    console.log("Verifying token");
    const accessToken = token.split(" ")[2];
    jwt.verify(accessToken,process.env.JWT_KEY, (err, decoded) => {
        if(err){
            res.status(403).json("Token is not valid!");
        }
     
        req.user = decoded.data
        next()
    })
  }else {
    res.status(403).json("You're not authenticated");
  }
};


const verifyTokenAndUserAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id|| req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You're not allowed to do that!");
      }
    });
  };

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You're not allowed to do that!");
      }
    });
  };

module.exports = {verifyTokenAndAdmin , verifyTokenAndUserAuthorization};
