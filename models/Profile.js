const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    // reference user model
    ref: "users"
  },
  // SEO friendly -> easier to go to profile
  handle: {
    type: String,
    required: true,
    max: 40
  },
  location: {
    type: String
  },
  // trainer select list
  status: {
    type: String,
    required: true
  },
  // forms allows CSV formate
  favPokemon: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
