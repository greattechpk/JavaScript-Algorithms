function factorial(num){
    let product = 1;

    for (let i = 1; num >= i; i++){    
    product *= i;    
}
return product;

}

console.log(factorial(5));