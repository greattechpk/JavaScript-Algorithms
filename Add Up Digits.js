function sumOfDigits(num){
    let splitArr = num.toString().split('') //creates string out of num splits characters to array
    let numArr = [];
    for( val of splitArr){//parses array values to ints and pushes to numArr
        val = Number.parseInt(val);
        numArr.push(val);        
    }

    return numArr.reduce(function(total,number){ // reduces and adds all values together and returns final value finishing the function
        return total + number;
    });
}

console.log(sumOfDigits(48))// will return 12