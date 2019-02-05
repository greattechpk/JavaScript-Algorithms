function longestWord(str){

    let strArr = str.replace(/[!@#$%^&*(),.?":{}|<>]/g,'').split(' ');//make array of words in str without punctuation
    let word = strArr[0] //let word be first word in array

    for( let i =1 ; i < strArr.length ; i++){
        if (word.length < strArr[i].length){ //if word from next index is longer change it to match the longer word
            word = strArr[i]; 
        }
    }

    return word;

}

longestWord('Ready, steady, go!!!')