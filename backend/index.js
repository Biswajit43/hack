const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const cors = require('cors');

const allowedOrigins = [
    'http://localhost:5173',
    'https://facebook-remote-aptitude-test.onrender.com'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const usermodel = require('./model/usermodel')
app.get('/', (req, res) => {
    res.send("hello world")
})
app.post('/submit', async (req, res) => {
    let { ph, password } = req.body;
    let user = await usermodel.create({
        ph,
        password,
    })
    res.send(user)
})
app.listen(PORT)