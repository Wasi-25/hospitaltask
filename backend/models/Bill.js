const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please enter patient name"],
    },
    age:{
        type:Number,
        required: [true, "Please enter patient age"],
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    servicename:{
      type:[String],
      required: true  
    },
    recieptno:{
        type: Number,
        required: true
    },
    billno:{
        type: Number,
        required: true
    },
    mobileno:{
        type:Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('bills', billSchema);