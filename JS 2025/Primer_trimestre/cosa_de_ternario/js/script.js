function resta(num1,num2) {
    //Tambien se puede
    let numc = Number.isInteger(num2) || 0;
    return num1-numc;
    //return num2 != undefined ? num1-num2:num1-0;
}

console.log(resta(2));

console.log(resta(5,2));