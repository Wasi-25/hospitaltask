const express= require("express");
const router = express.Router();
const Service = require("../models/Service");

router.post("/addservice", async (req,res)=>{
    try {
    
        const {servicename, price} =req.body;

        await Service.create({
            servicename,
            price
        })

        res.status(200).json({
            success: true,
            message:"Service Created",
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
    });
    }
});

module.exports = router;