const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Movie = require("./models/Movie");
const Booking = require("./models/Booking");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Local Theatre Ticket Booking System Backend is Running!");
});

// Get all movies
app.get("/api/movies", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.error("Error fetching movies:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// Add a movie
app.post("/api/movies", async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        console.error("Error adding movie:", error.message);
        res.status(400).json({ message: error.message });
    }
});

// Create a booking with seat availability validation
app.post("/api/bookings", async (req, res) => {
    try {
        const { movieTitle, showtime, tickets, seats, totalAmount } = req.body;

        // Debug: display booking data received from frontend
        console.log("Booking data received:", req.body);

        // Validate required information
        if (
            !movieTitle ||
            !showtime ||
            !Array.isArray(seats) ||
            seats.length === 0
        ) {
            return res.status(400).json({
                message: "Please provide the movie, showtime, and selected seats."
            });
        }

        // Validate ticket count
        if (
            !Number.isInteger(tickets) ||
            tickets < 1 ||
            tickets !== seats.length
        ) {
            return res.status(400).json({
                message: "The number of selected seats must match the ticket count."
            });
        }

        // Validate that seat names are unique within this booking
        if (new Set(seats).size !== seats.length) {
            return res.status(400).json({
                message: "You cannot select the same seat more than once."
            });
        }

        // Check if any selected seat is already booked for this movie and showtime
        const existingBooking = await Booking.findOne({
            movieTitle,
            showtime,
            seats: { $in: seats }
        });

        if (existingBooking) {
            return res.status(409).json({
                message: "One or more selected seats are already booked. Please choose different seats."
            });
        }

        // Save booking in MongoDB
        const booking = await Booking.create({
            movieTitle,
            showtime,
            tickets,
            seats,
            totalAmount
        });

        console.log("Booking saved successfully:", booking);

        res.status(201).json({
            message: "Booking successful!",
            booking
        });
    } catch (error) {
        console.error("Booking error:", error);

        res.status(400).json({
            message: error.message || "Unable to create booking."
        });
    }
});

// Get all bookings, newest first
app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ bookingDate: -1 });
        res.json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// Connect to MongoDB and start the server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(5000, () => {
            console.log("Server running at http://localhost:5000");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });