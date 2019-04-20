const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeaMonsterSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  imageURL: {
    type: String,
    required: true
  }
})

module.exports = SeaMonster = mongoose.model("SeaMonster", SeaMonsterSchema)


