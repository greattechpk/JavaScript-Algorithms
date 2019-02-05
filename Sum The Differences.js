function sumOfDifferences(arr){ // takes array of 2 numbers smallest to min largest to max
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0;
    for(let i = min; i <= max ; i++){ //adds i eash step increasing by one each time till i += max value
        sum += i;
    }
    return sum;//returns the sum

}

console.log(sumOfDifferences([10 , 5]));