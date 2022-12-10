const mongoose = require("mongoose");
const addressSchema= new mongoose.Schema({
    customerId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer",
    },
    address:{
        type:String,
        require:true
    },
    landmark:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    zipcode:{
        type:Number,
        require:true,
    },
    
   
});
//defining class we need to create collections
const Address = new mongoose.model('Address',addressSchema)
module.exports = Address