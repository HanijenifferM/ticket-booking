# 🎬 TheatreSpot – Local Theatre Ticket Booking System

## 📌 Project Overview
TheatreSpot is a web-based movie ticket booking application that allows users to browse movies, select showtimes, choose seats, and book tickets online. It provides a simple and interactive interface for managing movie reservations conveniently.

## 🎯 Project Objectives
- To simplify the movie ticket booking process.
- To provide interactive movie and showtime selection.
- To allow users to select seats based on availability.
- To store and manage booking details efficiently.
- To help prevent duplicate seat reservations for the same movie and showtime.

## ✨ Features
- **Movie Browsing:** View available movies and their posters.
- **Movie Search:** Search for your favourite movies.
- **Showtime Selection:** Choose from available showtimes.
- **Seat Selection:** Select preferred seats using an interactive seating layout.
- **Ticket Booking:** Select the number of tickets and calculate the total price.
- **Booking Confirmation:** View confirmation details after a successful booking.
- **My Bookings:** View previously created bookings.
- **Responsive Design:** Use the application on different screen sizes.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

## 📂 Project Structure

```text
local theater booking system/
├── client/
│   ├── public/
│   │   └── posters/
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── server/
    ├── models/
    │   ├── Movie.js
    │   └── Booking.js
    ├── .env
    ├── server.js
    └── package.json
```

## ⚙️ Installation and Setup

### Prerequisites
Install the following before running the project:
- Node.js and npm
- MongoDB running locally

### Step 1: Configure the Backend

Open a terminal and navigate to the server folder:

```bash
cd "D:\local theater booking system\server"
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` folder and add:

```env
MONGO_URI=mongodb://127.0.0.1:27017/theatre_booking
```

Start the backend server:

```bash
node server.js
```

The backend should run at:

```text
http://localhost:5000
```

### Step 2: Configure the Frontend

Open a **second terminal** and navigate to the client folder:

```bash
cd "D:\local theater booking system\client"
```

Install the dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

**Important:** Keep both terminal windows running while using the application.

## 💺 How to Use the Application

1. Open TheatreSpot in your browser.
2. Browse the available movies or search for a movie.
3. Select your preferred movie.
4. Choose an available showtime.
5. Select the number of tickets.
6. Choose your preferred seats.
7. Check the total ticket price.
8. Confirm the booking.
9. View your booking confirmation and booking history.

## 💰 Ticket Pricing

- Price per ticket: ₹180
- Minimum tickets: 1
- Maximum tickets per booking: 6

The total amount is calculated based on the number of tickets selected.

**Formula:**

`Total Amount = Number of Tickets × ₹180`

## 🗄️ Database Details

The application uses MongoDB to store movie and booking information.

### Movie Collection
Stores movie details such as:
- Movie title
- Genre
- Duration
- Rating
- Poster image

### Booking Collection
Stores booking details such as:
- Movie title
- Showtime
- Number of tickets
- Selected seats
- Total amount
- Booking date

Mongoose schemas are used to define the data structure and validate booking information.

## 🔌 Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check backend server status |
| GET | `/api/movies` | Retrieve movie details |
| POST | `/api/movies` | Add a movie |
| GET | `/api/bookings` | Retrieve booking history |
| POST | `/api/bookings` | Create a new booking |

## 🧠 Concepts Applied

- Full-stack web development
- Client-server architecture
- React components and state management
- REST API integration
- CRUD operations
- MongoDB database connectivity
- Mongoose schema validation
- Asynchronous programming
- JSON data exchange
- Responsive web design

## 🚀 Future Enhancements

- User registration and login
- Online payment integration
- Email booking confirmations
- Theatre and location selection
- Improved real-time seat availability
- Admin dashboard for managing movies and shows

## 🏁 Conclusion

TheatreSpot demonstrates how frontend technologies, backend services, and database systems can be integrated to develop a practical movie ticket booking application. It provides an interactive way to browse movies, select seats, and manage bookings while offering valuable experience in full-stack web development.

---

**Project Name:** TheatreSpot  
**Project Type:** Full-Stack Web Application  
**Domain:** Movie Ticket Booking System
