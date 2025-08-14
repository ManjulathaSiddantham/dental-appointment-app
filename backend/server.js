// backend/server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctors');
const appointmentRoutes = require('./routes/appointments');

// Connect to MongoDB
connectDB();

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
// app.use('/api/appointments', appointmentRoutes);

// Routes
app.use("/api/appointments", require("./routes/appointments"));


// Socket.io
io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
  socket.on('join-room', (room) => socket.join(room));
  socket.on('signal', (data) => {
    io.to(data.room).emit('signal', data.payload);
  });
  socket.on('message', (msg) => io.to(msg.room).emit('message', msg));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Hi Server running on port ${PORT}`));
