const prompt = require("prompt-sync")();

const deposit = ()=>{

    while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if((isNaN(numberDepositAmount))||(numberDepositAmount<=0)){
        console.log("Invalid deposit number, Please try again")
    }else{
        return numberDepositAmount;
    }
}
};

const getNumberOfLines = ()=>{

    while(true){
    const lines = prompt("Enter number of lines to bet on (1,2 or 3): ");
    const numberOfLines = parseFloat(lines);

    if((isNaN(numberOfLines))||(numberOfLines<=0)||(numberOfLines>3)){
        console.log("Invalid number of lines, Please try again")
    }else{
        return numberOfLines;
    }
}

}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
