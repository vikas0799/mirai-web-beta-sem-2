let express=require("express");
// console.log(express);
let app=express();
// console.log(x);
let port=3000;


app.get("/",(req,res)=>{
    console.log("prince garib h yarr..");
    res.send("clinet ko bhej diya...")
    
})


app.get("/payment",(req,res)=>{
    console.log("serverside rendering...");
    console.log("mirai");
    
    res.send("payment mirai")
    
})
app.get("/services",(req,res)=>{
  console.log("service on server side ");
  
    
    res.send("client services page")
    
})

// app.get("*",(req,res)=>{
//     console.log("user not fpund ");
//     res.send("404 page not found")
    
// }). //express5


app.listen(port,()=>{
    console.log(`server is starting at port ${port}`);
    
});