const express = require("express")
const mongoose = require("mongoose")
const userRoute = require('./routes/user');
const projectRoute = require('./routes/project');
const taskRoute = require('./routes/task');
const app = express()


const port = process.env.port || 9090;
const databaseName = 'jihenPFE';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/${databaseName}`).then(() => {
    console.log(`connected to ${databaseName}`);
}).catch(er => console.log(er));






app.use(express.json())
const cors = require("cors")
app.use(cors())

const morgan = require('morgan')
app.use(morgan('dev'))

app.use('/user', userRoute);
app.use('/project', projectRoute);
app.use('/task', taskRoute);



app.listen("9090", ()=>{
    console.log("Server works ")
})



















