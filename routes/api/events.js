const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Event = require("../../models/Event");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
var moment = require("moment");

// @route           GET /api/events/all
// @desc            Get all volunteering events
// @access          Private
router.get("/all", auth, async (req, res) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Failed to get all events." });
  }
});

// @route           POST /api/events
// @desc            Create event
// @access          Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Event needs a name").notEmpty(),
      check("location", "Please include a location").notEmpty(),
      check("date", "Please include a valid date").isISO8601().toDate(),
      check("description", "Please describe your event").notEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = req.user;
    if (user.isVolunteer) {
      return res
        .status(401)
        .json({ msg: "Unauthorized. Only organizations can create events." });
    }
    const { name, location, date, description } = req.body;

    try {
      const newEvent = await Event.create({
        name,
        location,
        description,
        date,
        organization: user.id,
      });

      return res.status(200).json({
        msg: "Event successfully created",
        event: newEvent,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: "Error with getting event from database",
      });
    }
  }
);

// @route           GET /api/events/:event_id
// @desc            Get a specific event by id
// @access          Private
router.get("/:event_id", async (req, res) => {
  try {
    const event = await Event.findOne({
      _id: req.params.event_id,
    });

    if (!event) {
      return res.status(400).json({ msg: "Event not found" });
    }

    return res.status(200).json(event);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Error getting event!",
    });
  }
});

// @route           PUT /api/events/rsvp/:event_id
// @desc            RSVP to the Event by ID
// @access          Private
router.put("/rsvp/:event_id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.event_id);
    const user = await User.findById(req.user.id);

    if (!event) {
      return res.status(400).json({ msg: "There is no such event." });
    }
    if (!user.isVolunteer) {
      return res
        .status(401)
        .json({ msg: "Only volunteers can sign up for events. " });
    }
    if (
      event.rsvps.filter((rsvp) => rsvp.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(409).json({ msg: "Already RSVP'd." });
    }

    event.rsvps.unshift({
      user: user._id,
      name: user.name,
      avatar: user.avatar,
    });

    await event.save();
    return res.json(event);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "RSVP Error!",
    });
  }
});

module.exports = router;
