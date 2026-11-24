const mongoose = require("mongoose");

const buildSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    stats: {
      str: { type: Number, default: 8 },
      agl: { type: Number, default: 8 },
      con: { type: Number, default: 8 },
      int: { type: Number, default: 8 },
      wis: { type: Number, default: 8 },
      cha: { type: Number, default: 8 },
    },
    leveling: {
      type: String,
      required: true,
    },
    equips: {
      act1: { type: String },
      act2: { type: String },
      act3: { type: String },
    },
    tags: {
      type: [String],
      default: [],
    },
  },

  { timestamps: true },
);

module.exports = mongoose.model("Build", buildSchema);
