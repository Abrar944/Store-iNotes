var jwt = require("jsonwebtoken");
const JWT = "Abrar Is a GoodBoy";

const fetchuser = (req, res, next) => {

// Get the User form JWT token from the token header

const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ error: "Please Authentication using a valid token " });
    
}
try {
          const data = jwt.verify(token,JWT);
          req.user = data.user;
          next();
} catch (error) {
            res.status(401).send({ error: "Please Authentication using a valid token " });

  }
};
module.exports = fetchuser;

