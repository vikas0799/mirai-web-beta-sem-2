const express=require("express");
const route=express.Router();

const studentController=require("../controllers/studentController.js")




route.get("/student",studentController.home);
route.get("/student/marks",studentController.marks);
route.get("/student/attendance",studentController.attendance);


module.exports=route;