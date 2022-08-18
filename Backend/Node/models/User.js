const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    firstname: String, 
    lastname: String,
    email: String, 
    passworc: String,
})