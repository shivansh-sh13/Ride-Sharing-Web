const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');
const companionRoutes = require('./routes/companionRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Enable JSON body parsing

// Route middlewares
app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/companions', companionRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
