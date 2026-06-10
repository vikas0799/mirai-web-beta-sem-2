const express=require("express");
const app=express();
const fs = require("fs");
const { stringify } = require("querystring");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/users/:userId/books/:bookId', (req, res) => {
  console.log(req.params);
  
    res.send("wait..serching rour data...");
});



// app.use((req,res,next)=>{
    //   console.log("params :", req.params.roll);  //get and post both
    // console.log("query  :", req.query);   //get only
    // console.log("body   :", req.body);    //post only
    // console.log("url    :", req.url);     //get and post both
    // next();
    
// })

// app.get('/user/:id', (req, res, next) => {
//   res.send(`User ${req.params.id}`);
// });

// app.get('/user/:id', (req, res) => {
//   res.send('Special handler for user ID 0');
// });

// app.get("/result:roll",(req,res)=>{
//     res.send("result passed...")
// })

app.get('/about',(req,res)=>{
    res.send("about route page")
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    //write to append data in file
    // fs.appendFileSync("data.json",JSON.stringify(req.body)+"\n","utf-8");
    res.send("registration completed...");
    
})



app.listen(3000,()=>{
    console.log("server is running at 3000 ");
    
})