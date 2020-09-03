const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const honestListSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//model take capital
const HonestList = mongoose.model("HonestList", honestListSchema);
module.exports = HonestList;
