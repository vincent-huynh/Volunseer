const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const User = require("../../models/User");
const Reward = require("../../models/Reward");
const { check, validationResult } = require("express-validator");

// @route           GET /api/rewards/all
// @desc            Get all rewards
// @access          Private
router.get("/all", auth, async (req, res) => {
  try {
    const rewards = await Reward.find();
    return res.status(200).json(rewards);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Failed to get all rewards." });
  }
});

// @route           GET /api/rewards/:reward_id
// @desc            Get a specific reward by id
// @access          Private
router.get("/:reward_id", async (req, res) => {
  try {
    const reward = await Reward.findOne({
      _id: req.params.reward_id,
    });

    if (!reward) {
      return res.status(400).json({ msg: "Reward not found" });
    }

    return res.status(200).json(reward);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Error getting reward!",
    });
  }
});

// @route           POST /api/rewards
// @desc            Create reward
// @access          Private
router.post(
  "/",
  [
    admin,
    [
      check("name", "Reward name is required").notEmpty(),
      check("description", "Description is required.").notEmpty(),
      check("points", "Points required. Must be a number.")
        .notEmpty()
        .isNumeric(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = req.user;
    if (!user.isAdmin) {
      return res.status(401).json({
        msg: "Unauthorized.",
      });
    }

    const { name, description, points } = req.body;

    try {
      const reward = await Reward.create({
        name,
        description,
        points,
      });

      return res.status(200).json({
        msg: "Reward successfully created.",
        reward,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: "Error with getting reward from database",
      });
    }
  }
);

module.exports = router;
