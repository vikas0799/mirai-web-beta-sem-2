console.log("hi");

let id1=setInterval(() => {
    console.log("score ..20");
    
}, 2000);


let id2=setTimeout(() => {
    console.log("hi");
clearInterval(id1);
    
}, 7000);
setTimeout(() => {
    clearInterval(id1);
    clearTimeout(id2);
}, 1000);
console.log(id1);
console.log(id2);

console.log("by");
