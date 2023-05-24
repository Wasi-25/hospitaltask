const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config({"path":"backend/config/config.env"});

app.use(cors())
app.use(express.json());
app.use("/api/", require("./routes/PatientRoute"));
app.use("/api/", require("./routes/ServiceRoute"));
app.use("/api/", require("./routes/BillRoute"));

app.use(express.static(path.join(__dirname, "../build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

module.exports = app;
