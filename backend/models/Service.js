const mongoose =require("mongoose");

const serviceSchema = new mongoose.Schema({
    servicename:{
        type: String
    },
    price:{
        type:Number
    }
});

module.exports = mongoose.model("services", serviceSchema);