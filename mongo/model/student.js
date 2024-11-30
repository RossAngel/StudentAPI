const mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name:String,
    RollNo:Number,
    Course:String,
    Department:String   
})

var StudentModel = mongoose.model("student",schema)
module.exports = StudentModel