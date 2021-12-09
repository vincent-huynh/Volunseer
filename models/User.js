const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://cdn.discordapp.com/attachments/448267962814824470/887452085052919888/blank_profile.png",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVolunteer: {
    type: Boolean,
  },
  rewards: [
    {
      reward: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reward",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  phoneNumber: {
    type: String,
  },
  affiliatedOrganizations: [
    {
      name: {
        type: String,
      },
    },
  ],
});

module.exports = User = mongoose.model("user", UserSchema);
