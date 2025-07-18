const mongoose = require('mongoose');
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/facebook");
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
