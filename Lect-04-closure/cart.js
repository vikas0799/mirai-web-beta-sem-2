let cart=["redtape 402","adidas 203","adidas_101","puma_201"];
let element="adidas_101";


let idx=cart.indexOf(element);
console.log(idx);

cart.splice(idx,1);
console.log(cart);

//clearcart
cart=[];
console.log(cart);
