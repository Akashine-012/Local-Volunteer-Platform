const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  place: { type: String, required: true },
  description: { type: String, required: true },
  poster: { type: String, required: true },  // Ensure poster is included
  volunteersNeeded: { type: Number, required: true },
  registeredVolunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Event", EventSchema);
