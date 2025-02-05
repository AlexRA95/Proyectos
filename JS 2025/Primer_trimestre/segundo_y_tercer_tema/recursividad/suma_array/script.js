let nums = ([1, 2, 3, 4, 5]);

//sumar elementos de un array

function sumar(element) {
    if(element.length === 0) return 0;
    return element[0] + sumar(element.slice(1));
}

console.log(sumar(nums));