function palindrome(str){
    let regexStr = str.toLowerCase().replace(/[!@#$%^&*(),.?":{}|<>\s]/g,'')
    
    let reverseStr =  regexStr.split('').reverse().join('');
   
    return reverseStr === regexStr;

}

console.log(palindrome('A man, a plan, a canal. Panama.'))