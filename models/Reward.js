const mongoose = require("mongoose");

const RewardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  points: {
    type: Number,
  },
});

module.exports = Reward = mongoose.model("reward", RewardSchema);
