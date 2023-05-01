const mongoose = require('mongoose');


const { Schema, model } = mongoose;
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true

        },
        password: {
            type: String,
            required: true

        },
        role: {
            type: String,
            enum: ['Manager', 'Teacher', 'Student', 'Admin'],
            default: 'Student'

        },
        date: {
            type: Date,
            default: Date.now
        },
        activated: {
            type: String,
            enum: ['ON', 'OFF'],
            default: 'OFF'
        },


    });
const User = mongoose.model('user', userSchema);

module.exports = User;
