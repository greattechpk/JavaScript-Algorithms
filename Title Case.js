function titleCase(str){
let strArr = str.split(' ')
strArr = strArr.map((word) =>{
    const firstletter = word.charAt(0).toUpperCase();
        word = firstletter.concat(word.slice(1,word.length));
        return word;
}).join(' ');

console.log(strArr);
return strArr;
}

titleCase('my name is peter good to meet you!');