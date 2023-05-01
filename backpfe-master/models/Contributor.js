const mongoose = require('mongoose');

const contributorSchema = new mongoose.Schema(

    {

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },


        tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }],



    });
const Contributor = mongoose.model('contributor', contributorSchema);

module.exports = Contributor; 