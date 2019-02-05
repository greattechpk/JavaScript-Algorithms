function isDigit(str){
    const digitArray = ['0','1','2','3','4','5','6','7','8','9'] //array of digits
    
    return digitArray.includes(str)//validates to boolean

}

console.log(isDigit('2'));