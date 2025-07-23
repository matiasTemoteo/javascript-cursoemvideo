
/*
    Returning values in a function, it is possible to have
    multiple delcarated returns, but only one of them will be
    executed, based on the logic and the data being processed.
*/
function oddOrEven(n) {
    if (n % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
};

let res = oddOrEven(4);
console.log(`The number 4 is ${res}`);
