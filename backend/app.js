const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({"path":"backend/config/config.env"});

app.use(cors())
app.use(express.json());
app.use("/api/", require("./routes/PatientRoute"));
app.use("/api/", require("./routes/ServiceRoute"));
app.use("/api/", require("./routes/BillRoute"));

app.get("/",(req,res)=>{
    res.send("Working...")
})

module.exports = app;