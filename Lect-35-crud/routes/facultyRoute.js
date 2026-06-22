const express=require("express");
const route=express.Router();






route.get("/faculty",facultyController.home);
route.get("/faculty/marks",facultyController.salary);
route.get("/faculty/attandance",facultyController.holiday);
