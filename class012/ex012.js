var hour = new Date().getHours();

console.log(`Now there is exactly ${hour}hrs`);

if (hour < 12) {
    console.log('Good morning!');
} else if (hour <= 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}
