const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(

    {

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
        },

        contributors:  [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contributor'
        }],

        state: {
            type: String,
            enum: ['Upcoming', 'InProgress', 'Done',],
            default: 'InProgress'

        },
        comment: {
            type: String,
        },



    });
const Task = mongoose.model('task', taskSchema);

module.exports = Task; 