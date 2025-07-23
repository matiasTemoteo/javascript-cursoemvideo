
/*
    Recursive function call. It is possible to call the own
    function inside itself, a technique named recursivity.
    Once the recursive call is done, it will encadeate e
    sequence of calls, until some logic interrupt the
    calling.
*/
function factorial(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * factorial(num -1);
    }
};

console.log(`The factorial of 5 is ${factorial(5)}`);
