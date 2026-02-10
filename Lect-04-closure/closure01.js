function bank(){
    let balance=0;

    let deposite=(amount)=>{
        balance +=amount;
    }

    let withdraw=(amount)=>{
        balance -=amount;
    }

    let getBalance=()=>{
        console.log(balance);
        
    }
    return { deposite, withdraw, getBalance }
}

let shreya=bank();
shreya.deposite(2000);
shreya.getBalance();  //2000

let utkarsh=bank();
utkarsh.deposite(2000);
utkarsh.withdraw(500);
utkarsh.getBalance();  //1500