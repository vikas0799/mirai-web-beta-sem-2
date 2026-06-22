// app
//  │
//  ├── prince routes
//  ├── faculty routes
//  ├── admin routes
//  └── login routes
const express = require("express");
const router = express.Router();

const studentController = require("../controllers/princeController.js");
// console.log(princeController);


router.get("/", princeController.home);

router.get("/getdata", princeController.getprinces);

router.get("/insertdata", princeController.insertPage);

router.post("/createdata", princeController.createprince);

router.get("/edit/:userid", princeController.editPage);

router.post("/update/:userid", princeController.updateprince);

router.get("/delete/:id", princeController.deleteprince);



module.exports = router;