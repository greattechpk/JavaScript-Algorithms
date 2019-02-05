function longestWord(str){
    let str2 = str.split(' ').sort(function(a,b){
        return b.length - a.length;
    })[0];
    
    console.log(str2)
    return str2.length;

}

longestWord('My name is Peter');