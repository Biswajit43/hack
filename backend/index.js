const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',  // during development
    credentials: true
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