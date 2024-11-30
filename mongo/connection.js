const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rossangel2233:wtfisthislife@cluster0.7pagb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})