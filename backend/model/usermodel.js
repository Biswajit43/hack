const mongoose = require('mongoose')
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
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