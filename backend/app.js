const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config({"path":"backend/config/config.env"});

app.use(express.json());
app.use("/api/", require("./routes/PatientRoute"));
app.use("/api/", require("./routes/ServiceRoute"));
app.use("/api/", require("./routes/BillRoute"));

if(process.env.NODE_ENV!=="production"){
    require("dotenv").config({path: "./config/config.env"});
}

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
