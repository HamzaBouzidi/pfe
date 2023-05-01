const mongoose = require('mongoose');


const Project = mongoose.model('Project',{
    pid : {
        type: String,
        required : true
    },
    name : {
        type: String,
        required : true
    },
    team : {
        type : String,
        required : true
    },
    progress : {
        type : String ,
        required : true
    },
    date : {
        type : String 
    }
    
})

module.exports = Project;