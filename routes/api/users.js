const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @route           GET /api/users/me
// @desc            Get current user info
// @access          Private
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Error getting user.",
    });
  }
});

// @route           GET /api/users/:user_id
// @desc            Get user info by id
// @access          Private
router.get("/:user_id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ msg: `Could not find user with id: ${req.params.user_id}` });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Error with getting user from database",
    });
  }
});

// @route           PUT /api/users
// @desc            Edit & update user information
// @access          Private
router.put("/", auth, async (req, res) => {
  let { name, email, phoneNumber, affiliatedOrganizations } = req.body;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "This user does not exist." }] });
    }

    if (email) {
      user.email = email;
    }

    if (name) {
      user.name = name;
    }

    if (phoneNumber) {
      user.phoneNumber = phoneNumber;
    }

    if (affiliatedOrganizations) {
      user.affiliatedOrganizations = affiliatedOrganizations;
    }

    await user.save();
    return res.status(200).json({ msg: "Profile updated." });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong on the server...");
  }
});

// @route           POST /api/users
// @desc            Register an account. Make sure you include
//                  name, email, password, and isVolunteer (boolean)
// @access          Public
router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "You need a valid email").isEmail(),
    check("password", "Password must be more than 6 characters long.").isLength(
      { min: 6 }
    ),
    check("isVolunteer", "Need to specify if user is a volunteer").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, email, password, isVolunteer } = req.body;

    try {
      email = email.toLowerCase();
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user exists already" }] });
      }

      user = new User({
        name,
        email,
        password,
        isVolunteer,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong on the server...");
    }
  }
);

module.exports = router;
