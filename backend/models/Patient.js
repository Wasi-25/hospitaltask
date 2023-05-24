const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
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
    img:{
        type:String
    },
    billno:{
        type: Number,
        required: true
    },
    service:{
        type:Array,
        required: true
    },
    mobileno:{
        type:Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('patient_details', patientSchema);