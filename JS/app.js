// Creating an array
let superhero = ['Spiderman', 'Sailor Moon', 'Scarlet Witch', 'Homelander', 'Batman'];

// Accessing array elements
console.log('Hero 1:', superhero[0]);
console.log('Hero 2:', superhero[1]);
console.log('The last hero:', superhero[superhero.length - 1]);

let person = {
    name: "John",
    age: 30,
    profession: "Developer",
    greet: function () {
        console.log("Hello",this.name)
    }
};