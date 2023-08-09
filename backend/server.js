require('dotenv').config()
const cors = require('cors')
const express = require ('express');
const mongoose = require('mongoose')
const tasksRoutes = require('./routes/tasks')
const userRoutes = require('./routes/user')

//express app
const app = express();

//middleware
app.use(express.json()) //for accessing req.body

app.use((req, res, next)=>{
    console.log(res.path, req.method)
    next()
})

//routes
app.use('/api/tasks',tasksRoutes) // localhost:4000/api/tasks/{taks.... -> new path
app.use('/api/user/',userRoutes) // localhost:4000/api/tasks/{taks.... -> new path

//cors
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

//connect to DB
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
// listen for request
app.listen(process.env.PORT, ()=>{
    console.log('connected to CD and listening on port',process.env.PORT);
})

})
.catch((error)=>{
    console.log(error)
})


