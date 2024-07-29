const express = require("express");
const fs = require("fs");
const userRouter = require("./routes/user")
const PORT = 3000;
const app = express();
const { connectMongoDb }= require("./connection");
connectMongoDb("mongodb://localhost:27017/test");


//router
app.use("/user", userRouter);

app.listen(PORT, () => console.log("Port started"))
