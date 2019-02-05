function duplicateNumbers(numArr){//returns true if their are duplicate numbers in array given
    let sortedArr = numArr.sort(( a, b) => {//sorts values in array
        return a-b;
    });

    for(let  i = 0; i < sortedArr.length ; i++){//loop through array
        if(sortedArr[i] === sortedArr[i+1]){ // if index value is equal to next index value return true
            return true;            
        }
    }
    return false;
}

console.log(duplicateNumbers([6,4,5,0,3,1]));
console.log(duplicateNumbers([5,2,4,5,3]));