let saif={
    fname:"saif jafri",
    dist:"prayagraj",
    state:"UP",
    age:42
};

// let age=saif.age;
// let dist=saif.dist;
let {fname,dist:district, age,college="mirai"}=saif;
console.log(fname);
// console.log(dist);
console.log(district);

console.log(college);


