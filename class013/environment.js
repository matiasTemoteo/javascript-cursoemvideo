// console.log('everything fine?');
// console.log('everything fine?');
// console.log('everything fine?');
// console.log('everything fine?');

/*
    Iteration loop with conditional test in the start point.
    - 'while' - Only accepts conditions as parameter.
    * When need variables to build the condition, the
      variable need to be define before and updated inside
      code block.
*/

var c = 1;
while(c <= 6) {
    console.log(`Passo ${c}`);
    c++;
}


/*
    Iteration loop with conditional test aftert block code.
    - 'do-while' - Only accepts conditions as parameter.
    * When need variables to build the condition, the
      variable need to be define before and updated inside
      code block.
    * executes de code block once a time before chech condition.
      It is usefull when it is needed to have the code running
      one time even not checking any condition.
*/

var d = 1;
do {
    console.log(`Passo ${d}`);
    d++;
} while (d <= 6);
