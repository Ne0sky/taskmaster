const Task = require('../models/taskModel');
const mongoose = require('mongoose')
// get all tasks
const getTasks = async(req, res)=>{

    const user_id = req.user._id

    const tasks = await Task.find({user_id}).sort({createdAt:-1})

    res.status(200).json(tasks)
}

// get a single task
const getTask = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such task not valid id'})
    }

    const task = await Task.findById(id)
    if(!task){
        return res.status(404).json({error: "No such task in db"})
    }

    res.status(200).json(task)
}

// create new task
const createTask = async(req, res)=> {
    const { title, description, priority, completed } = req.body;

    //add doc to db
    try {
        const user_id = req.user._id
        const task = await Task.create({ title, description, priority, completed, user_id });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a task
const deleteTask = async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such task not valid id'})
    }

    const task = await Task.findOneAndDelete({_id: id})
    if(!task){
        return res.status(404).json({error: "No such task in db"})
    }

    res.status(200).json(task)


}

// update a task

const updateTask = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such task not valid id'})
    }

    const task = await Task.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!task){
        return res.status(404).json({error: "No such task in db"})
    }

    res.status(200).json(task)
}

module.exports = {
    getTask,
    getTasks,
    createTask,
    deleteTask,
    updateTask
}