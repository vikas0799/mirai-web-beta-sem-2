const express=require("express");
const app=express();


app.set("view engine","ejs");

//file , uske data ko retrive kiya
let prince={
    name:"prince mirai",
    age:29,
    dist:"munger"
};
let flag=5;

app.get("/",(req,res)=>{
    res.send("home page..");
})
app.get("/user",(req,res)=>{
    res.render("user",{prince,flag});
})


app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})
