let saif={
    fname:"saif ullah jafri",
    age:32,
    dist:"chambal",
    state:"allahabad",
    "last fname":"jafri",
    " ":"sapce ki h",
    "":"empty key",
    ".":"dot key",
    address:
    {
        temp:{
            dist:"gaziabad",
            state:"up"
        },
        perm:{
            dist:"allahabad",
            state:"UP"
        }
    },
    display:()=>{
       console.log("hi");
       
    }

}
// console.log(saif);
// console.log(saif.age);
// console.log(saif["age"]);

// console.log(saif["last fname"]);
// console.log(saif[""]);
// console.log(saif["."]);
// saif.fname="saif ullah";
// console.log(saif);

saif.school="saint joshef school";
console.log(saif);
delete saif["fname"];
console.log(saif);


// console.log(saif.address.perm.dist);

for(let key in saif){
    console.log(key,saif[key]);
    
}


// saif.display();



