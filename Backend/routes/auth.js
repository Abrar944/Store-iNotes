const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/Fetch");
const JWT = "Abrar Is a GoodBoy";

//EndPoint for NewCreateUser
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whetherthe User  with this mail Exist or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: "Sorry this mail already Exits" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create a New User
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT);
      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("send Error Occured");
    }
  }
);
// EndPoint for LoginUser

router.post(
  "/login",
  [
    body("email", "Enter the valid mail").isEmail(),
    body("password", "It cannot be blank field ").exists(),
  ],
  async (req, res) => {
    let success = false;
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      var user = await User.findOne({ email });
      if (!user) {
        success = false;
           return res
          .status(400)
          .json({ error: "Login With Correct Credentials" });
      }
      let passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Login With Correct Credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      res.status(500).send("send Error Occured");
    
    }
  }
);

// Routes:3 Get the Users Who Already login they need to auth using the jsw token

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    var userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    res.status(500).send("send Error Occured Hello  ");
  }
});

module.exports = router;
