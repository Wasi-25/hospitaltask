const express= require("express");
const router = express.Router();
const Bill = require("../models/Bill");

router.post("/bill", async(req,res)=>{
    try {
        res.send([global.bills])
    } catch (error) {
        console.error(error.message);
        res.send("Error!");
    }
})

router.post("/createbill", async(req,res)=>{
        try {
    
            const {name,age, gender, servicename,  billno, recieptno, mobileno} =req.body;
    
            await Bill.create({
                name,
                age,
                gender,
                servicename,
                recieptno,
                mobileno,
                billno,
            })
    
            res.status(200).json({
                success: true,
                message:"Bill Created !",
            });
        } catch (error) {
            res.status(500).json({
            success: false,
            message: error.message,
          });
        }
    });


module.exports = router;