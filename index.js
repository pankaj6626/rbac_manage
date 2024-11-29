const express=require("express");
require("dotenv").config();
const dbConnect=require("./src/config/dbConnect");
const authRoutes=require("./src/routes/authRoutes");
const userRoutes=require("./src/routes/userRoutes");

dbConnect();

const app=express();

//middlewares
app.use(express.json());

//routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
//start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});
