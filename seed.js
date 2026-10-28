require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("./models/Movie");

const movies = [
    {
        title: "Leo",
        genre: "Action / Thriller",
        duration: "2h 44m",
        rating: 7.2,
        image: "/posters/leo.webp",    },
    {
        title: "Vikram",
        genre: "Action / Thriller",
        duration: "2h 55m",
        rating: 8.3,
        image: "/posters/vikram.webp",    },
    {
        title: "Jailer",
        genre: "Action / Drama",
        duration: "2h 48m",
        rating: 7.1,
        image: "/posters/jailer.webp",    },
    {
        title: "Master",
        genre: "Action / Thriller",
        duration: "2h 59m",
        rating: 7.3,
        image: "/posters/master.webp",    }
];

async function seedMovies() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Movie.deleteMany({});
        await Movie.insertMany(movies);

        console.log("Movies added successfully!");

        await mongoose.disconnect();
    } catch (error) {
        console.error("Error adding movies:", error.message);
        await mongoose.disconnect();
        process.exitCode = 1;
    }
}

seedMovies();