# Ride Sharing Platform

A full-stack ride-sharing platform built with **React** for the frontend and **Node.js**, **Express**, and **MongoDB** for the backend. The platform supports three user roles: **Travelers**, **Companions**, and **Admins**. Travelers can book rides, Companions can track rides, and Admins can manage users and feedback.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features
- **User Authentication**: Secure login and registration for Travelers, Companions, and Admins.
- **Traveler Dashboard**: Travelers can view ride details, book, and share rides.
- **Companion Dashboard**: Companions can track ongoing rides and provide feedback.
- **Admin Dashboard**: Admins can manage all rides and view user feedback.
- **Real-time Ride Tracking**: Travelers and Companions can track ride progress.
- **JWT Authentication**: Protects API routes with token-based authentication.
- **Error Handling**: Centralized error handling for better debugging.

---

## Tech Stack

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **CSS**: For styling components.
- **Axios**: For making HTTP requests to the backend API.

### Backend:
- **Node.js**: JavaScript runtime environment for backend logic.
- **Express.js**: Fast web framework for Node.js.
- **MongoDB**: NoSQL database for storing ride, user, and feedback data.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Bcrypt.js**: For hashing passwords and securing user credentials.

---

## Project Structure

### Frontend (`ride-sharing-frontend`)
Project Structure:

public/: Public assets (e.g., index.html).
src/
components/
Login.js: User login form.
Register.js: User registration form.
TravelerDashboard.js: Interface for Travelers to manage their rides.
RideDetails.js: Displays detailed ride information.
CompanionDashboard.js: Interface for Companions to track rides.
AdminDashboard.js: Interface for Admins to view all rides and feedback.
services/
authService.js: Manages API calls for authentication (login/register).
App.js: Main application component.
index.js: Entry point for React application.
package.json: Dependencies and scripts for the frontend.
Key Features:

React.js: Frontend built using a component-based architecture.
Axios: Used for making HTTP requests to the backend API.
Routing:
React Router: Handles navigation between different pages like login, dashboard, etc.
Component Breakdown:
Login and Register: Forms for user authentication.
Traveler Dashboard: Travelers can view, share, and track their rides.
Companion Dashboard: Allows tracking of rides and feedback submission.
Admin Dashboard: Admins can view all rides and feedback.
Authentication:
Login and registration are managed through the backend's JWT-based authentication.
Frontend Setup:

Navigate to the ride-sharing-frontend directory.
Run npm install to install dependencies.
Start the frontend with npm start.
The frontend runs on http://localhost:3000 by default.


### Backend (`ride-sharing-backend`)

Project Structure:

config/
db.js: Sets up the MongoDB connection.
controllers/
authController.js: Manages user registration and login.
rideController.js: Handles ride creation, updating, and sharing.
companionController.js: Manages ride tracking and feedback submission.
adminController.js: Admin functionalities, such as viewing rides and feedback.
middlewares/
authMiddleware.js: Protects routes using JWT authentication.
errorMiddleware.js: Centralized error handling for the entire application.
models/
User.js: Defines the user schema (Traveler, Companion, Admin).
Ride.js: Defines the ride schema (ride details, audit trail).
Feedback.js: Defines the feedback schema.
routes/
authRoutes.js: Routes for login and registration.
rideRoutes.js: Routes for travelers, companions, and admins.
utils/
generateToken.js: Utility to generate JWT tokens.
.env: Contains environment variables (MongoDB URI, JWT secret, etc.).
server.js: Entry point of the backend application.
package.json: Dependencies and scripts for the backend.
Key Features:

JWT Authentication: Secure login, registration, and protected routes.
MongoDB Database: Stores ride, user, and feedback data.
Centralized Error Handling: Easier debugging and management of errors.
User Roles:
Traveler: Can create, update, and share ride details.
Companion: Can track rides and provide feedback.
Admin: Can view all rides and feedback submitted by users.
API Endpoints:
POST /api/auth/register: Registers a new user.
POST /api/auth/login: Logs in a user.
POST /api/rides: Creates a new ride (Traveler).
PUT /api/rides/:id: Updates a ride.
GET /api/admin/rides: Retrieves all shared rides (Admin).
GET /api/companions/track/:id: Tracks a ride in progress (Companion).
POST /api/companions/feedback: Submits ride feedback (Companion).
Environment Variables:

.env file:
plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/ridesharing
JWT_SECRET=your_jwt_secret
PORT=5000
Backend Setup:

Clone the repository.
Run npm install to install dependencies.
Set environment variables in .env file.
Start the server using npm run dev.
