const mongoose = require('mongoose');

const Schema = mongoose.Schema

// scheme defines a structure of a document in DB

const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
      },
    completed: {
        type: Boolean,
        default: false,
      },
      user_id :{
        type:String,
        required:true
      }
}, {timestamps: true})

//model applies the schema to a particular model
// then we use the model to interact

module.exports =  mongoose.model('Task', taskSchema)


