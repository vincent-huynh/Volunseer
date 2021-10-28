require('dotenv').config()
const express = require('express');
const connectDB = require('./db/db');
const app = express();

// Required for body validation
app.use(express.json({ extended: false }));
// Connect to MongoDB Database
connectDB();

app.get('/', (req, res) => res.send('Reached API!'));

// Routes
app.use('/api/test', require('./routes/api/test'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));