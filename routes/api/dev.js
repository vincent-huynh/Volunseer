const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Reward = require("../../models/Reward");
const admin = require("../../middleware/admin");
// @route           GET /api/dev
// @desc            Example test route
// @access          DEV
router.get("/", admin, (req, res) => res.send("Reached test route"));

// @route           GET /api/dev/users/all
// @desc            Get all users
// @access          DEV
router.get("/users/all", admin, async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Failed to get all users." });
  }
});

// @route           DELETE /api/dev/delete_event/:event_id
// @desc            Delete an Event by iD
// @access          DEV
router.delete("/delete_event/:event_id", admin, async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.event_id,
    });
    if (!event) {
      return res.status(400).json({ msg: "Event not found" });
    }
    return res.status(200).json({
      msg: "The following event was successfully deleted:",
      event,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Error getting event!",
    });
  }
});

// @route           DELETE /api/dev/delete_reward/:reward_id
// @desc            Delete an Event by iD
// @access          DEV
router.delete("/delete_reward/:reward_id", admin, async (req, res) => {
  try {
    const reward = await Reward.findOneAndDelete({
      _id: req.params.reward_id,
    });
    if (!reward) {
      return res.status(400).json({ msg: "Reward not found" });
    }
    return res.status(200).json({
      msg: "The following reward was successfully deleted:",
      reward,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Error getting reward!",
    });
  }
});

// @route           POST /api/dev/admin/:user_id
// @desc            Make a user admin
// @access          DEV
router.post("/admin/:user_id", admin, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.user_id, {
      isAdmin: true,
    });
    if (!user) {
      return res.status(400).json({ msg: "User not found." });
    }
    return res.status(200).json({
      msg: "User made admin.",
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Error getting user!",
    });
  }
});

module.exports = router;
