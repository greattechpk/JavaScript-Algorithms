function missingNumber(numArr){
    let sortedNums = numArr.sort((a,b) =>{//sorts array of numbers
        return a-b;
    });
    for(let i =1; i <sortedNums.length ; i++){//goes through array
        let j = i-1;
        if(sortedNums[j] !== sortedNums[i]-1){// if array value is not equal to next value -1 return next value -1
            return sortedNums[i]-1;
        }
    }
}

console.log(missingNumber([0,1,2,3,4,5,7,8,9]))
console.log(missingNumber([1,3,4,2,7,6,9,8,0]))