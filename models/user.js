const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aditya');

const userSchema = mongoose.Schema({
    task: String,
    discription: String,
})


module.exports = mongoose.model("task", userSchema);