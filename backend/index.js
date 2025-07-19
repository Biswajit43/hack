const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const usermodel = require('./model/usermodel');
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS Setup
app.use(cors()); // allow all

// Preflight handler (optional)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// ✅ Routes
app.get('/', (req, res) => {
    res.send("hello world");
});

app.post('/submit', async (req, res) => {
    try {
        const { ph, password } = req.body;

        if (!ph || !password) {
            return res.status(400).json({ error: "Phone and password are required." });
        }

        const user = await usermodel.create({ ph, password });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error in /submit:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
