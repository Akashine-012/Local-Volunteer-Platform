const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contactEmail: { type: String, required: true },
  website: { type: String },
});

module.exports = mongoose.model("Organization", OrganizationSchema);
