/*
    Creating a object to contain data, similiar as array, but
    in the objects, it is possible to define a 'key' to access
    some data instead of only use numeric indexes.

    Also it is possible declarate functions inside objects where
    these functions can have access to the object scope and keys
    and values by the expression 'this'.
*/

let friend = {
    name: 'jose',
    sex: 'mal',
    weight: 80.4,
    getWeight(w) {
        console.log('Get Weight!');
        this.weight += w;
    }
};

console.log(`${friend.name} have ${friend.weight}kg.`);
friend.getWeight(2);
console.log(`${friend.name} have ${friend.weight}kg.`);
