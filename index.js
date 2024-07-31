const express = require("express");
const { connectMongoDb }= require("./connection");
const userRouter = require("./routes/user")
// const fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: false }));
const PORT = 3000;
connectMongoDb("mongodb://localhost:27017/test").then(()=>{
    console.log("Mongodb connected!");
})


//router
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Port started at 3000"))
