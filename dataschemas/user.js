const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobileNo:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

mongoose.model("User",userSchema);