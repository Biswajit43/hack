const mongoose = require('mongoose');
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
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
