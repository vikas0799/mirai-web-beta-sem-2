const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");



mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")
// mongoose.connect("mongodb+srv://vikas56:vikas1234@cluster0.it2bd.mongodb.net/?appName=Cluster0")
    .then(() => {
        console.log("mongoDB local wala connected..");

    })
    .catch(() => {
        console.log("error a gya  thik connect kar le");

    })


//schema of students
const studentSchema = new mongoose.Schema({
    name: "String",
    age: Number,
    course: "String"
})


//model 
const Student = mongoose.model("Student", studentSchema);


app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/test",async(req,res)=>{
    //   let data=await Student.find({name:"wick"});
    //   let data=await Student.findOne({name:"wick"});
    // let data=await Student.updateMany({name:"wick"},{name:"john wick"});
    // let data=await Student.updateOne({name:"john wick"},{name:"SISU"});

    // let data=await Student.deleteOne({name:"john wick"});
    let data=await Student.findByIdAndDelete(
        "6a2fa92f4922087a1119d37c"
    )


    console.log(data);
    
    res.send("hi bye")
})




app.listen(3000, () => {
    console.log("server is running at 3000");
})