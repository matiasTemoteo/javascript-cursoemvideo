var age = 68;

/*
    Using 'else if' structure to create code blocks to
    be executed if the previous conditions were not satisfied.
*/

if (age < 16) {
    console.log('Não vota.');
} else if (age < 18 || age > 65) {
    console.log('Voto opcional.');
} else {
    console.log('Voto obrigatório.');
}
