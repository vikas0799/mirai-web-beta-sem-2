const express=require("express");
const connectDB=require(".config/db");
const app=express();
const princeroute=require("./routes/princeRoute");
const auth=require("./middleware/auth")
const princeroute=require("./routes/princeRoute");
app.use(auth);


// app.get("/",princeroute);

app.listen(3000,()=>{
    app.listen("server is running at 3000");
})


