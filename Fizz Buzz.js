function fizzBuzz(num){
    let str = '';
    if (num % 3 === 0){//if divisible by 3 str is fizz
        str = 'fizz';
    }
    if (num % 5 === 0){//if divisible by 5 concat buzz
        str += 'buzz';
    }

    return str;
}

console.log(fizzBuzz(15));

fizzBuzz(15);