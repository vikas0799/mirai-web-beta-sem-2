// In JavaScript, a closure is a feature where an inner function has access to the variables of its outer (enclosing) function, even after the outer function has finished executing.
function counter (){
    let count=0;
    let a=100;
    return function (){
        count +=5;
        a -=10;
        console.log(count,a);
        
    }
}

let aarav=counter();
// console.log(aarav);
aarav();    // 5 90
aarav();    // 10 80

let ans=counter();
aarav();    //15 70
ans();      //5 90
ans();       //10 80
aarav();     //20 60
console.log(ans);
