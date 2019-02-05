function validTime(time){
    let hourMinuteArr = time.split(':'); // split time into array

    let hour = Number(hourMinuteArr[0]); // declare hour from array
    let minute = Number(hourMinuteArr[1]); // declare minute from array

    if (hour < 24 && minute < 60){ //return true if valid parameters are met
        return true;
    }else{
        return false;
    }
}

console.log(validTime('24:40'));
console.log(validTime('12:34'));
console.log(validTime('10:61'));