const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    ph: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("user", userschema);
