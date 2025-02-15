const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Event = require("../models/Event");

const router = express.Router();

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage });

// Create Event with Poster Upload
router.post("/create", upload.single("poster"), async (req, res) => {
  try {
    console.log("File received:", req.file); // Debugging - Check if file is uploaded
    console.log("Request body:", req.body);

    const { name, date, place, description, volunteersNeeded } = req.body;
    if (!name || !date || !place || !description || !volunteersNeeded) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const poster = req.file ? req.file.filename : null; // Store filename if uploaded

    const event = new Event({
      name,
      date,
      place,
      description,
      volunteersNeeded,
      poster,
    });

    await event.save();
    res.status(201).json({ message: "Event created successfully!", event });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Failed to create event" });
  }
});

// Get All Events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

router.get("/:eventId", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Error fetching event details" });
  }
}); 

module.exports = router;
