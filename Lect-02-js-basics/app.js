console.log("hi mirai");

// var -> functional scope (jab varriablew fn ke ander hota h)
// var -> global scope hota h jab fn ke nasder nahi hota h

var a=90;
 
if(3>2){
    console.log("hi");
    //..
    //..
    //..
    console.log(a);
    if(4<2){
        console.log("by");
        console.log(a);
        
        
    }
    
}
else{
    //.
    //.
    //..

}