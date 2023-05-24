require("dotenv").config({path: "../config/config.env"});
const mongoose = require("mongoose");

exports.connectDatabase = async ()=>{
    await mongoose.connect(`${process.env.MONGOURI}`,{ useNewUrlParser: true }, async(err,result)=>{
        if(err) console.log(err);
        else{
            console.log(`Database Connected`);
            const fetched_data = await mongoose.connection.db.collection("patient_details");
            fetched_data.find({}).toArray( async function(err, data){
                const bill = await mongoose.connection.db.collection("bills");
                bill.find({}).toArray(async function(err,billData){
                    if(err) console.log(err);
                    else{
                        global.patient_details = data;
                        global.bills = billData;
                    }
                })
            })
        }
    })
}
