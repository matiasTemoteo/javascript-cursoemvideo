
/*
    It is posible determine a default value for the parameters
    in the function, so when the parameter was not informed, the
    default value will be considered instead.
*/
function sum(n1=0, n2=0) {
    return Number(n1) + Number(n2);
};

let sumRes = sum(4, 5);
console.log(`The sum between 4 and 5 is ${sumRes}`);

let sumRes2 = sum(0, 2);
console.log(`The sum between 0 and 2 is ${sumRes2}`);

let sumRes3 = sum(5);
console.log(`The sum only with 5 is ${sumRes3}`);
