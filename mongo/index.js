// importing
const express = require('express')
require("./connection")
var StudentModel = require("./model/student")

// initialise
var app = express();

// Middleware
app.use(express.json());

// API creation
app.post('/insert',async(req,res)=>{
    try{
        await StudentModel(req.body).save();
        res.send({message:"Data Added"});
    }catch(error){
        console.log(error);
    }
});

app.get('/view', async (req, res) => {
    try {
        const data = await StudentModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        var data = await StudentModel.findByIdAndUpdate(req.params.id,req.body);
        res.send('Data updated');
    } catch (error) {
        console.log(error);
    }
});

app.delete('/remove/:id', async (req, res) => {
    try {
        await StudentModel.findByIdAndDelete(req.params.id);
        res.send('Data deleted');
    } catch (error) {
        console.log(error);
    }
});

// Port setting
app.listen(3005, () => {
    console.log('Port is Running');
});