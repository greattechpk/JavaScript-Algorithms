function uniqueValues(arr1,arr2){
    let uniqueArray = [];
    for(let val of arr1){ //checks all values in arr1
        if (!arr2.includes(val) && !uniqueArray.includes(val)){ // if arr2 doesn't have arr1 val and vall is not in unique array push val to unique array
            uniqueArray.push(val);
        }
    }

    for(let val of arr2){
        if (!arr1.includes(val) && !uniqueArray.includes(val)){ // chacks for uniques in arr 2 same logic as loop above
            uniqueArray.push(val);
        }
    }

    return uniqueArray;

}

console.log(uniqueValues([1,2,3],[4,2,1,5]))