function digitSum(str){//takes in string finds numbers and adds them together
    let sumOfNumbers = 0;
    let numArr = str.match(/[0-9]+/g) || [];// create array of only numbers from the string

   
    numArr.forEach((num) => {//for each num in numArr add to sumOfNumbers
        sumOfNumbers += Number(num);
    });
    return sumOfNumbers;//return the sum of numbers
   

}

console.log(digitSum('This person has no numbers.'));
console.log(digitSum('The 13th on the 6th day of the week is aka as Friday the 13th.'))