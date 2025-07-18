const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/facebook')
const userschema = mongoose.Schema({
    ph: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("user", userschema)