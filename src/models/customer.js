const mongoose = require("mongoose");
const customerSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    dob:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    },
   
});
//defining class we need to create collections
const Register = new mongoose.model('Customer',customerSchema)
module.exports = Register