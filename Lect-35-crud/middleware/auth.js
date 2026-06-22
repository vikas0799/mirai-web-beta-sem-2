const auth=(req,res,next)=>{
//
//. logic
console.log("true user..");
next();

}

module.exports=auth;