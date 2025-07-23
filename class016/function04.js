function factorial(num) {
    let fat = 1;
    for(let n = num; n > 1; --n) {
        fat *= n;
    }
    return fat;
}

console.log(`The factorial of 5 is ${factorial(5)}`);
