/*
    Declarating a Array (composed variable).
*/

let num = [5, 8, 2, 9, 3];

// Atributing values in specific index
num[5] = 6;

// Adding element in the end of the array with 'push()'.
num.push(1);

console.log(num);


/* Acessing the index where the respective value is located
   inside the array
*/
console.log(`The value 8 is in position ${num.indexOf(8)}`);

// Acessing the length of the array (number of elements).
console.log(`The array has ${num.length} indexes.`);
console.log(`The first value on array is ${num[0]}`);

// sorting the array
num.sort();

console.log(`Now, the array is sorted: ${num}.`);

console.log(`Now the value 8 is in position ${num.indexOf(8)}`);

console.log(
    `but the value 11 was not found -> "${num.indexOf(11)}"`
);
