// index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./Router/MyRouter');

const app = express();
const port = 8000;
const path=require('path');
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/subject',express.static(path.join(__dirname,'subject')));
app.use('/uploads/thumbnail',express.static(path.join(__dirname,'uploads/thumbnails')));
app.use('/uploads/video',express.static(path.join(__dirname,'uploads/videos')));

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// MongoDB Connection
mongoose.connect('mongodb+srv://smrutiranjan940:sonu0644@cluster0.wcma086.mongodb.net/lms')
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
  })
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
  });

// Routes
app.use('/api', router);

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server Running on port ${port}`);
});
