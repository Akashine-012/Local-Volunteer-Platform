const express = require("express");
const Organization = require("../models/Organization");
const router = express.Router();

// Add Organization (Admin Only)
router.post("/create", async (req, res) => {
  const { name, description, contactEmail, website } = req.body;
  try {
    const organization = new Organization({ name, description, contactEmail, website });
    await organization.save();
    res.status(201).json(organization);
  } catch (err) {
    res.status(500).json({ message: "Error creating organization" });
  }
});

// Get All Organizations
router.get("/", async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching organizations" });
  }
});

module.exports = router;
