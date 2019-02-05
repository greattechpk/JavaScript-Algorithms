function ammendedScentence(str){
    str2 = str.split(/(?=[A-Z])/).join(' ').toLowerCase();// splits str at uppercase joins with space then to lowercase
    return str2;
}

console.log(ammendedScentence("CodingGodDoesWorkSon"))