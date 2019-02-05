function repeatString(str,repetitions){
    let i = 0;
    let str2 = '';
    while(i < repetitions){
        i++;
        str2 = str2.concat(str);
    }
    return str2;
}

console.log(repeatString('Java ', 3))