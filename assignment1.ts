// Personal Message
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);

// Name Cases
let personNameCase: string = "John Doe";
console.log(personNameCase.toLowerCase());
console.log(personNameCase.toUpperCase());
console.log(personNameCase.replace(/\b\w/g, char => char.toUpperCase()));

// Famous Quote
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

// Famous Quote 2
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

// Stripping Names
let whitespaceName: string = "\t\n  John Doe \n\t";
console.log(whitespaceName);
console.log(whitespaceName.trim());

// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Favorite Number
let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// Adding Comments
// This program greets a person with their name
// Author: [Your Name]
// Date: [Current Date]

// Names
let names: string[] = ["John", "Jane", "Alice"];
for (let name of names) {
    console.log(name);
}

// Greetings
for (let name of names) {
    console.log(`Hello ${name}, would you like to hang out?`);
}

// Your Own Array
let transportation: string[] = ["car", "motorcycle", "bicycle"];
for (let vehicle of transportation) {
    console.log(`I would like to own a ${vehicle}.`);
}

// Guest List
let dinnerGuests: string[] = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Changing Guest List
let guestUnavailable: string = dinnerGuests.pop()!;
console.log(`${guestUnavailable} can't make it to the dinner.`);

let newGuest: string = "Charles Darwin";
dinnerGuests.push(newGuest);
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// More Guests
console.log("Good news! We found a bigger dinner table.");

dinnerGuests.unshift("Galileo Galilei");
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Nikola Tesla");
dinnerGuests.push("Leonardo da Vinci");

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time.");

console.log("Sorry, we can only invite two guests for dinner.");
while (dinnerGuests.length > 2) {
    let removedGuest: string = dinnerGuests.pop()!;
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

dinnerGuests = [];
console.log(dinnerGuests);

// Seeing the World
let placesToVisit: string[] = ["Japan", "Italy", "New Zealand", "Brazil", "Egypt"];
console.log(placesToVisit);
console.log([...placesToVisit].sort());
console.log(placesToVisit);
console.log([...placesToVisit].sort().reverse());
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
console.log([...placesToVisit].sort());
console.log([...placesToVisit].sort().reverse());

// Dinner Guests
console.log(`We are inviting ${dinnerGuests.length} people to dinner.`);

// Array of Items
let items: string[] = ["mountains", "rivers", "countries", "cities", "languages"];

// TypeScript Object
let myObject: { key: string, value: any }[] = [
    { key: "key1", value: "value1" },
    { key: "key2", value: "value2" },
    { key: "key3", value: "value3" }
];

// Intentional Error
// Attempting to access an index that doesn't exist in an array
let array: number[] = [1, 2, 3];
console.log(array[10]); // This line will cause an index error

// Conditional Tests
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// More Conditional Tests
// Tests for equality and inequality with strings
console.log("apple" === "apple");
// @ts-ignore
console.log("apple" !== "orange");

// Tests using the lower case function
console.log("hello".toLowerCase() == "hello");
console.log("HELLO".toLowerCase() != "hello");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);

// Tests using "and" and "or" operators
console.log(true && true);
console.log(true || false);

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits.includes("apple"));

// Test whether an item is not in an array
console.log(!fruits.includes("pineapple"));

// Alien Colors #1
let alien_color: string = "green";
if (alien_color === "green") {
    console.log("Player earned 5 points.");
}

// Alien Colors #2
if (alien_color === "green") {
    console.log("Player earned 5 points.");
} else {
    console.log("Player earned 10 points.");
}

// Alien Colors #3
if (alien_color === "green") {
    console.log("Player earned 5 points.");
} else if (alien_color === "yellow") {
    console.log("Player earned 10 points.");
} else if (alien_color === "red") {
    console.log("Player earned 15 points.");
}

// Stages of Life
let age: number = 25;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Favorite Fruit
let favorite_fruits: string[] = ["apple", "banana", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

// Hello Admin
let usernames: string[] = ["admin", "john", "jane", "alice", "bob"];
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}

// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// Checking Usernames
let current_users: string[] = ["John", "Jane", "Alice", "admin", "Bob"];
let new_users: string[] = ["John", "Jane", "Mike", "Admin", "Sarah"];

for (let new_user of new_users) {
    let isTaken: boolean = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log(`${new_user} will need to enter a new username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}

// Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let suffix: string;
    switch (number) {
        case 1:
            suffix = "st";
            break;
        case 2:
            suffix = "nd";
            break;
        case 3:
            suffix = "rd";
            break;
        default:
            suffix = "th";
    }
    console.log(`${number}${suffix}`);
}

// Pizzas
let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// Animals
let animals: string[] = ["dog", "cat", "rabbit"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// T-Shirt
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love JavaScript");

// Cities
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore", "Pakistan");
describe_city("Paris", "France");

// City Names
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));

// Album
function make_album(artist: string, album_title: string, tracks?: number): { artist: string, album_title: string, tracks?: number } {
    let album: { artist: string, album_title: string, tracks?: number } = {
        artist: artist,
        album_title: album_title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "Album1", 10));
console.log(make_album("Artist2", "Album2"));
console.log(make_album("Artist3", "Album3", 15));

// Magicians
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette"];
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);

// Great Magicians
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
let great_magicians: string[] = make_great(magicians);
show_magicians(great_magicians);

// Unchanged Magicians
let original_magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette"];
let modified_magicians: string[] = make_great([...original_magicians]);
show_magicians(modified_magicians);
show_magicians(original_magicians);

// Sandwiches
function make_sandwich(...items: string[]) {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
        console.log(item);
    }
}
make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "bacon");
make_sandwich("peanut butter", "jelly", "bread");

// Cars
function car_info(manufacturer: string, model: string, ...options: string[]) {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let option of options) {
        let [key, value] = option.split(":");
        car[key] = value;
    }
    return car;
}
console.log(car_info("Toyota", "Camry", "color:red", "sunroof:true"));
console.log(car_info("Honda", "Accord", "color:blue"));
}