const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');

const authRoute=require("./routes/auth")
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     // useCreateIndex: true,
    }).then(console.log("Connected to MONGO")).catch((err)=> console.log(err));

    //postman check
    app.use("/api/auth",authRoute);



 app.listen("5000",()=>{
    console.log("Backend running ok");
 });
 