const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
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
app.listen(3000)