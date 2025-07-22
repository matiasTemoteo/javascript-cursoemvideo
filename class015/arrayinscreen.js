let values = [1, 7, 4, 2, 9];
console.log(values[0]);

values.sort();


/*
    It is possible iterate the array using the
    structure 'for' and 'for in'.
*/
console.log('Using normal for');
for(let pos = 0; pos < values.length; pos++) {
    console.log(
        `The position ${pos} has value: ${values[pos]}.`
    );
}


/*
    The 'for in' is a structure created to iterate arrays
    and objects, so it is simpler tham 'for' in this cases.
*/
console.log('Using "for in" ');
for(let pos in values) {
    console.log(
        `The position ${pos} has value: ${values[pos]}.`
    );
}
