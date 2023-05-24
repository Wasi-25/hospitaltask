const express= require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post("/patients",(req,res)=>{
    try {
        res.send([global.patient_details])
    } catch (error) {
        console.error(error.message);
        res.send("Error!");
    }
});

router.post("/addpatient", async(req,res)=>{
        try {
    
            const {name, age, gender, billno} =req.body;
    
            await Patient.create({
                name,
                age,
                gender,
                billno,
            })
    
            res.status(200).json({
                success: true,
                message:"Patient Added",
            });
        } catch (error) {
            res.status(500).json({
            success: false,
            message: error.message,
          });
        }
    });


module.exports = router;
