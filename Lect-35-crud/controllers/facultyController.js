const facultyModel=require("../models/facultySchema");


const facultyController={
    home:async(req,res)=>{
        // res.send("this is students home page")
        //db se read ho 
      let user= await facultyModel.find();
      console.log(user);
      
        res.render("home.ejs",{user});
    },
    marks:(req,res)=>{
        res.send("saidf fail ho gya");
    },
    attendance:(req,res)=>{
        res.send("75% ATTeDANCE CHAHIYE");
    }

}



module.exports=facultyController;