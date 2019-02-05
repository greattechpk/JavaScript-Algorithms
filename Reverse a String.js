function ReverseString(str){
    let reversedStr = str.split('').reverse().join('');
    return reversedStr;    
}

console.log(ReverseString('Peter'));