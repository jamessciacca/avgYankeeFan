//creating the schema that every player in the database will share
const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: String,
  team: String,
  position: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Player', PlayerSchema);