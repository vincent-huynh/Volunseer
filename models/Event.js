const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number], // lat, long
      index: "2dsphere",
    },
  },
  description: {
    type: String,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
  },
  rsvps: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Event = mongoose.model("event", EventSchema);
