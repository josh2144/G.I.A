var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Personal Message
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some TypeScript today?"));
// Name Cases
var personNameCase = "John Doe";
console.log(personNameCase.toLowerCase());
console.log(personNameCase.toUpperCase());
console.log(personNameCase.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// Famous Quote
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// Famous Quote 2
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
// Stripping Names
var whitespaceName = "\t\n  John Doe \n\t";
console.log(whitespaceName);
console.log(whitespaceName.trim());
// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Favorite Number
var favoriteNumber = 7;
console.log("My favorite number is ".concat(favoriteNumber, "."));
// Adding Comments
// This program greets a person with their name
// Author: [Your Name]
// Date: [Current Date]
// Names
var names = ["John", "Jane", "Alice"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
// Greetings
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var name_2 = names_2[_a];
    console.log("Hello ".concat(name_2, ", would you like to hang out?"));
}
// Your Own Array
var transportation = ["car", "motorcycle", "bicycle"];
for (var _b = 0, transportation_1 = transportation; _b < transportation_1.length; _b++) {
    var vehicle = transportation_1[_b];
    console.log("I would like to own a ".concat(vehicle, "."));
}
// Guest List
var dinnerGuests = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
for (var _c = 0, dinnerGuests_1 = dinnerGuests; _c < dinnerGuests_1.length; _c++) {
    var guest = dinnerGuests_1[_c];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Changing Guest List
var guestUnavailable = dinnerGuests.pop();
console.log("".concat(guestUnavailable, " can't make it to the dinner."));
var newGuest = "Charles Darwin";
dinnerGuests.push(newGuest);
for (var _d = 0, dinnerGuests_2 = dinnerGuests; _d < dinnerGuests_2.length; _d++) {
    var guest = dinnerGuests_2[_d];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// More Guests
console.log("Good news! We found a bigger dinner table.");
dinnerGuests.unshift("Galileo Galilei");
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Nikola Tesla");
dinnerGuests.push("Leonardo da Vinci");
for (var _e = 0, dinnerGuests_3 = dinnerGuests; _e < dinnerGuests_3.length; _e++) {
    var guest = dinnerGuests_3[_e];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
// Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time.");
console.log("Sorry, we can only invite two guests for dinner.");
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _f = 0, dinnerGuests_4 = dinnerGuests; _f < dinnerGuests_4.length; _f++) {
    var guest = dinnerGuests_4[_f];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
dinnerGuests = [];
console.log(dinnerGuests);
// Seeing the World
var placesToVisit = ["Japan", "Italy", "New Zealand", "Brazil", "Egypt"];
console.log(placesToVisit);
console.log(__spreadArray([], placesToVisit, true).sort());
console.log(placesToVisit);
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
placesToVisit.reverse();
console.log(placesToVisit);
console.log(__spreadArray([], placesToVisit, true).sort());
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Dinner Guests
console.log("We are inviting ".concat(dinnerGuests.length, " people to dinner."));
// Array of Items
var items = ["mountains", "rivers", "countries", "cities", "languages"];
// TypeScript Object
var myObject = [
    { key: "key1", value: "value1" },
    { key: "key2", value: "value2" },
    { key: "key3", value: "value3" }
];
// Intentional Error
// Attempting to access an index that doesn't exist in an array
var array = [1, 2, 3];
console.log(array[10]); // This line will cause an index error
// Conditional Tests
var car = 'subaru';
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
var fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("apple"));
// Test whether an item is not in an array
console.log(!fruits.includes("pineapple"));
// Alien Colors #1
var alien_color = "green";
if (alien_color === "green") {
    console.log("Player earned 5 points.");
}
// Alien Colors #2
if (alien_color === "green") {
    console.log("Player earned 5 points.");
}
else {
    console.log("Player earned 10 points.");
}
// Alien Colors #3
if (alien_color === "green") {
    console.log("Player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("Player earned 15 points.");
}
// Stages of Life
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Favorite Fruit
var favorite_fruits = ["apple", "banana", "mango"];
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
var usernames = ["admin", "john", "jane", "alice", "bob"];
for (var _g = 0, usernames_1 = usernames; _g < usernames_1.length; _g++) {
    var username = usernames_1[_g];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
    // No Users
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
    // Checking Usernames
    var current_users = ["John", "Jane", "Alice", "admin", "Bob"];
    var new_users = ["John", "Jane", "Mike", "Admin", "Sarah"];
    for (var _h = 0, new_users_1 = new_users; _h < new_users_1.length; _h++) {
        var new_user = new_users_1[_h];
        var isTaken = false;
        for (var _j = 0, current_users_1 = current_users; _j < current_users_1.length; _j++) {
            var current_user = current_users_1[_j];
            if (new_user.toLowerCase() === current_user.toLowerCase()) {
                isTaken = true;
                break;
            }
        }
        if (isTaken) {
            console.log("".concat(new_user, " will need to enter a new username."));
        }
        else {
            console.log("".concat(new_user, " is available."));
        }
    }
    // Ordinal Numbers
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var _k = 0, numbers_1 = numbers; _k < numbers_1.length; _k++) {
        var number = numbers_1[_k];
        var suffix = void 0;
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
        console.log("".concat(number).concat(suffix));
    }
    // Pizzas
    var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
    for (var _l = 0, pizzas_1 = pizzas; _l < pizzas_1.length; _l++) {
        var pizza = pizzas_1[_l];
        console.log("I like ".concat(pizza, " pizza."));
    }
    console.log("I really love pizza!");
    // Animals
    var animals = ["dog", "cat", "rabbit"];
    for (var _m = 0, animals_1 = animals; _m < animals_1.length; _m++) {
        var animal = animals_1[_m];
        console.log("A ".concat(animal, " would make a great pet."));
    }
    console.log("Any of these animals would make a great pet!");
    // T-Shirt
    function make_shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
    }
    make_shirt();
    make_shirt("medium");
    make_shirt("small", "I love JavaScript");
    // Cities
    function describe_city(city, country) {
        if (country === void 0) { country = "Pakistan"; }
        console.log("".concat(city, " is in ").concat(country, "."));
    }
    describe_city("Karachi");
    describe_city("Lahore", "Pakistan");
    describe_city("Paris", "France");
    // City Names
    function city_country(city, country) {
        return "".concat(city, ", ").concat(country);
    }
    console.log(city_country("Lahore", "Pakistan"));
    console.log(city_country("New York", "USA"));
    console.log(city_country("Tokyo", "Japan"));
    // Album
    function make_album(artist, album_title, tracks) {
        var album = {
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
    var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette"];
    function show_magicians(magicians) {
        for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
            var magician = magicians_1[_i];
            console.log(magician);
        }
    }
    show_magicians(magicians);
    // Great Magicians
    function make_great(magicians) {
        var great_magicians = [];
        for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
            var magician = magicians_2[_i];
            great_magicians.push("the Great ".concat(magician));
        }
        return great_magicians;
    }
    var great_magicians = make_great(magicians);
    show_magicians(great_magicians);
    // Unchanged Magicians
    var original_magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette"];
    var modified_magicians = make_great(__spreadArray([], original_magicians, true));
    show_magicians(modified_magicians);
    show_magicians(original_magicians);
    // Sandwiches
    function make_sandwich() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        console.log("You ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log(item);
        }
    }
    make_sandwich("ham", "cheese", "lettuce");
    make_sandwich("turkey", "bacon");
    make_sandwich("peanut butter", "jelly", "bread");
    // Cars
    function car_info(manufacturer, model) {
        var options = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            options[_i - 2] = arguments[_i];
        }
        var car = {
            manufacturer: manufacturer,
            model: model
        };
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            var _b = option.split(":"), key = _b[0], value = _b[1];
            car[key] = value;
        }
        return car;
    }
    console.log(car_info("Toyota", "Camry", "color:red", "sunroof:true"));
    console.log(car_info("Honda", "Accord", "color:blue"));
}
