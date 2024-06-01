"use strict";
// Question-02: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// Question-03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Storing a persons name in the variable
let personName = "Eric Jhonson";
// Prinitng the message
console.log("Answer 02:\n");
console.log(`Hello ${personName}, would you like to learn some Python today?`);
// Printing in lower case
console.log("Answer 03:\n");
console.log(personName.toLowerCase());
// Printing in uppercase
console.log(personName.toUpperCase());
// Printing in title case
console.log(personName.charAt(0).toUpperCase() + "ric " + personName.charAt(5).toUpperCase() + "honson");
// Question-04: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// Question-05: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Famous person's name stored in a variable(used const as it cannot be changed)
const famousPerson = "Maya Angelou";
// Quote stored in a variable
console.log("Answer 04 and 05:\n");
const message = `${famousPerson} once said, "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'"`;
// Print the complete message
console.log(message);
// Question-06: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Answer 06:\n");
let Name = "\t  Albert Einstein  \n";
console.log("Name with whitespace:", Name);
let trimmedName = Name.trim();
console.log("Stripped name:", trimmedName);
// Question-07:  Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Question-08: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// Answer 07
console.log("Answer 07:\n");
console.log(7 + 1);
console.log(10 - 2);
console.log(8 * 1);
console.log(40 / 5);
// Answer 08
console.log("Answer 08:\n");
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
// Question-09: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// Question-10: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Store your favorite number in a variable
let favoriteNumber = 14;
// Create a message that reveals your favorite number
let myMessage = `My favorite number is ${favoriteNumber}.`;
// Print the message
console.log("Answer 09:\n");
console.log(myMessage);
// Question-11: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// Question-12: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Store the names of a few friends in an array called names
let names = ["Alice", "Bob", "Charlie", "Diana"];
// Print each person’s name by accessing each element in the list, one at a time
console.log("Answer 11 and 12:\n");
console.log(`Hello ${names[0]}\n`);
console.log(`Hello ${names[1]}\n`);
console.log(`Hello ${names[2]}\n`);
console.log(`Hello ${names[3]}`);
// Question-13: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransport = ["Tesla Model S", "Honda Civic", "BMW X5", "Kawasaki Ninja"];
console.log("Answer 13:\n");
console.log(`I would like to own a ${favoriteTransport[0]}.\n`);
console.log(`My favourite one is  ${favoriteTransport[2]}.\n`);
console.log(`The most common one is ${favoriteTransport[1]}.\n`);
console.log(`I would like to also own a ${favoriteTransport[3]}.`);
// Question-14: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Question-15: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Question-16: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Question-17: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Question-19: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Define an array to store the guests
let guests = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Joseph Henery"];
// Function to send invitation messages
function sendInvitations(guestList) {
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are cordially invited to dinner.`);
    }
}
// Question-14
console.log("Answer 14:\n");
sendInvitations(guests);
// Question-15
console.log("Answer 15:\n");
let unableToAttend = guests.pop();
console.log(`${unableToAttend} can't make it to the dinner.`);
guests.push("Nikola Tesla");
sendInvitations(guests);
// Question-16
console.log("Answer 16:\n");
console.log("Good news! We found a bigger dinner table!");
guests.unshift("Isaac Newton");
guests.splice(Math.floor(guests.length / 2), 0, "Ada Lovelace");
guests.push("Galileo Galilei");
sendInvitations(guests);
// Question-17
console.log("Answer 17:\n");
console.log("Unfortunately, our new dinner table won't arrive in time, so we can only invite two people.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
sendInvitations(guests);
// Question-19
console.log("Answer 19:\n");
console.log("\nThe number of people left is 2", guests);
// Question-18: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
const places = ["Medina", "Najaf", "Karbala", "Mashad", "Kazmain", "Sammra", "Qum", "Syria"];
console.log("Answer 18:\n");
console.log(places);
let alphabeticalOrder = places.slice().sort((a, b) => a.localeCompare(b));
console.log("Array in alphabetical order:\n", alphabeticalOrder);
let reverseAlphabeticalOreder = alphabeticalOrder.reverse();
console.log("Reversing the alphabetical order:\n", reverseAlphabeticalOreder);
let reversePlaces = places.reverse();
console.log("Revered original array:\n", reversePlaces);
let backToOriginal = reversePlaces.reverse();
console.log("Reversing the reversed original array back to its original form:\n", backToOriginal);
// Sorting alphabetically but this time the original array is changed
let alphabeticalSort = places.sort((a, b) => a.localeCompare(b));
console.log("Array sorted aplhabetically :\n", alphabeticalSort);
let reverseSorted = alphabeticalSort.reverse();
console.log("Reverse sorted array:\n", reverseSorted);
// Question-20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let Foods = ["Butter Chicken", "Tandoori Chicken", "Saag Paneer", "Biryani", "Dosa", "Idli", "Vada", "Samaosa", "Pakora", "Roti", "Paratha", "Kulfi", "Gulab Jamun", "Jalebi", "Lassi", "Chai", "Chole", "Pav Bhaji", "Dal Makhni"];
let Counteries = ["Pkaistan", "India", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives", "Afghanistan", "Myanmar", "Mauritius", "Seychelles", "Singapore", "Fiji", "Cuba", "Iraq", "Iran", "Saudi Arabia", "Turkey", "Oman"];
let Languages = ["Mandarin ", "Spanish", "English", "Hindi", "Arabic", "French", "Portuguese", "Bengali", "Russian", "Japanese", "German", "Javanese", "Korean", "Vietnamese", "Telugu", "Tamil", "Marathi", "Turkish", "Urdu", "Italian"];
let foodList = Foods.slice().sort((a, b) => a.localeCompare(b));
let countryList = Counteries.slice().sort((a, b) => a.localeCompare(b));
let languagesList = Languages.slice().sort((a, b) => a.localeCompare(b));
console.log("Arranged foods list:\n", foodList);
console.log("Arranged country list:\n", countryList);
console.log("Arranged language list:\n", languagesList);
const cityCountryList = [
    { city: "New York", country: "USA" },
    { city: "Tokyo", country: "Japan" },
    { city: "Paris", country: "France" },
    { city: "Berlin", country: "Germany" },
    { city: "Sydney", country: "Australia" }
];
console.log(countryList);
// prinitng Paris(error)
console.log(cityCountryList[4]);
// Question-23: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Question-24: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');
let age = 25;
console.log("Is age == 25? I predict True.");
console.log(age == 25);
console.log("Is age > 20? I predict True.");
console.log(age > 20);
console.log("Is age < 30? I predict True.");
console.log(age < 30);
console.log("Is age >= 25? I predict True.");
console.log(age >= 25);
console.log("Is age <= 24? I predict False.");
console.log(age <= 24);
let theName = 'Alice';
console.log("Is name == 'Alice'? I predict True.");
console.log(theName == 'Alice');
console.log("Is name != 'Bob'? I predict True.");
console.log(theName != 'Bob');
console.log("Is name == 'alice'? I predict False.");
console.log(theName == 'alice');
console.log("Is name != 'Alice'? I predict False.");
console.log(theName != 'Alice');
let isMember = true;
console.log("Is isMember == true? I predict True.");
console.log(isMember == true);
let temperature = 75;
console.log("Is temperature < 70? I predict False.");
console.log(temperature < 70);
console.log("Is temperature > 80? I predict False.");
console.log(temperature > 80);
// Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit != 'orange');
console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit == 'orange');
console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit != 'apple');
// Tests using the lower case function
let language = 'JavaScript';
console.log("Is language.toLowerCase() == 'javascript'? I predict True.");
console.log(language.toLowerCase() == 'javascript');
console.log("Is language.toLowerCase() == 'JavaScript'? I predict False.");
console.log(language.toLowerCase() == 'JavaScript');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let score = 95;
console.log("Is score == 95? I predict True.");
console.log(score == 95);
console.log("Is score != 85? I predict True.");
console.log(score != 85);
console.log("Is score > 90? I predict True.");
console.log(score > 90);
console.log("Is score < 100? I predict True.");
console.log(score < 100);
console.log("Is score >= 95? I predict True.");
console.log(score >= 95);
console.log("Is score <= 95? I predict True.");
console.log(score <= 95);
console.log("Is score < 90? I predict False.");
console.log(score < 90);
console.log("Is score > 100? I predict False.");
console.log(score > 100);
console.log("Is score <= 90? I predict False.");
console.log(score <= 90);
console.log("Is score >= 100? I predict False.");
console.log(score >= 100);
// Tests using "and" and "or" operators
let x = 10;
let y = 20;
console.log("Is x > 5 and y > 15? I predict True.");
console.log(x > 5 && y > 15);
console.log("Is x < 5 or y > 15? I predict True.");
console.log(x < 5 || y > 15);
console.log("Is x > 15 and y > 25? I predict False.");
console.log(x > 15 && y > 25);
console.log("Is x < 5 or y < 15? I predict False.");
console.log(x < 5 || y < 15);
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple'));
// Question-25:  Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color = 'green';
if (alien_color === 'green') {
    console.log('The player just earned 5 points.');
}
let alienColor = 'red';
if (alienColor === 'green') {
    console.log('The player just earned 5 points.');
}
// Question-26: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let theAlienColor = "green";
if (theAlienColor === "green") {
    console.log("The player just earned 5 points for shooting the alein.");
}
else {
    console.log("The player just earned 10 points.");
}
let anotherAlienColor = "red";
if (anotherAlienColor === "green") {
    console.log("The player just earned 5 points for shooting the alein.");
}
else {
    console.log("The player just earned 10 points.");
}
// Question-27: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor1 = "green";
if (alienColor1 == "green") {
    console.log("The player just earned 5 points.");
}
else if (alienColor1 == "yellow") {
    console.log("You just earned 10 points.");
}
else if (alienColor1 == "red") {
    console.log("The player just earned 15 points");
}
let alienColor2 = "red";
if (alienColor2 == "green") {
    console.log("The player just earned 5 points.");
}
else if (alienColor2 == "yellow") {
    console.log("You just earned 10 points.");
}
else if (alienColor2 == "red") {
    console.log("The player just earned 15 points");
}
let alienColor3 = "green";
if (alienColor3 == "green") {
    console.log("The player just earned 5 points.");
}
else if (alienColor3 == "yellow") {
    console.log("You just earned 10 points.");
}
else if (alienColor3 == "red") {
    console.log("The player just earned 15 points");
}
// Question-28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let Age = 45;
console.log("Answer 28:\n");
if (Age < 2) {
    console.log('The person is a baby.');
}
else if (Age >= 2 && Age < 4) {
    console.log("The person is a toddler.");
}
else if (Age >= 4 && Age < 13) {
    console.log("The person is a kid.");
}
else if (Age >= 13 && Age < 20) {
    console.log("The person is a teenager.");
}
else if (Age >= 20 && Age < 65) {
    console.log("The person is an adult.");
}
else if (Age >= 65) {
    console.log("The person is an elder.");
}
// Question-29: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ['mango', 'strawberry', 'banana'];
console.log("Answer 29:\n");
if (favorite_fruits.includes('mango')) {
    console.log('You really like mangoes!');
}
if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
}
if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favorite_fruits.includes('strawberry')) {
    console.log('You really like strawberries!');
}
if (favorite_fruits.includes('grape')) {
    console.log('You really like grapes!');
}
// Question-30: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// Question-31: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ['admin', 'john_doe', 'jane_smith', 'alice', 'bob', 'charlie'];
console.log("Answer 30:\n");
for (let username of usernames) {
    if (username == `admin`) {
        console.log("Hello admin, would you like to see a status report.");
    }
    else {
        console.log(`Hello ${username}, thankyou for logging in again.`);
    }
}
console.log("Answer 31:\n");
usernames = [];
if (usernames.length == 0) {
    console.log("We need to find some new users.");
}
// Question-32: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("Answer 32:\n");
let current_users = ["john@123", "alice@145", "eric@167", "michale@189", "sarah@100"];
let new_users = ['John@123', 'Jane@145', 'Eric@167', 'David@189', 'Sarah@100'];
for (let new_user of new_users) {
    let lowercase_new_user = new_user.toLowerCase();
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, the username '${new_user}' is not available. Please choose a different username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
        current_users.push(lowercase_new_user);
    }
}
// Question-33: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let Numbers of numbers) {
    let ordinal;
    console.log("Answer 33:\n");
    if (Numbers === 1) {
        ordinal = "1st";
    }
    else if (Numbers === 2) {
        ordinal = "2nd";
    }
    else if (Numbers === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = `${Numbers}th`;
    }
    console.log(ordinal);
}
// Question-34: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favorite_pizza = ["Margherita", "BBQ Chicken", "Cheesy Cheez"];
console.log("Answer 34:\n");
for (let i = 0; i < favorite_pizza.length; i++) {
    console.log(`I like ${favorite_pizza} pizza`);
}
console.log("Pizza is one of my favorite foods. I enjoy trying different toppings and flavors. Whether it's the classic Margherita, the savory Pepperoni, or the tangy BBQ Chicken, each pizza brings its own unique taste and satisfaction. I really love pizza!");
// Question-35: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let pets = ["Horses", "Swans", "Dogs"];
console.log("Answer 35:\n");
for (let i = 0; i < pets.length; i++) {
    console.log(`${pets[0]} the freedom of the wind in their manes.`);
    console.log(`${pets[1]} are majestic wild creatures.`);
    console.log(`${pets[2]} make a great pet.`);
}
console.log(`${pets} are all loyal.`);
// Question-36: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("Answer 36:\n");
function make_shirt(size, message) {
    console.log(`Make a ${size}-sized shirt with ${message} printed on it.`);
}
make_shirt(`Medim`, `Hard work pays off`);
// Question-37:  Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("Answer 37:\n");
function makeShirts(size = "large", message = "I love TypeScript") {
    console.log(`Make a ${size}-sized shirt with ${message} printed on it.`);
}
makeShirts();
makeShirts("medium");
makeShirts("small", "Hard work pays off");
// Question-38: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("Answer 38:\n");
function describe_city(city, country = "Unkown") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("Mumbai", "India");
describe_city("Brussles");
// Question-39: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("Answer 39:\n");
function city_country(city, country) {
    console.log(city, country);
}
console.log("Karachi,", "Pakistan");
console.log("Mumbai,", "India");
console.log("Najaf,", "Iraq");
// Question-40: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("Answer 40:\n");
function make_album(artist, title, tracks) {
    let album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums without track information
let album1 = make_album('Artist1', 'Album1');
let album2 = make_album('Artist2', 'Album2');
let album3 = make_album('Artist3', 'Album3');
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
// Create an album with track information
let album4 = make_album('Artist4', 'Album4', 12);
console.log(album4);
// Question-41:  Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("Answer 41:\n");
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
show_magicians(magicians);
// Question-42: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log("Answer 42:\n");
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}
let Magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
make_great(magicians);
// Call the function to show magicians
show_magicians(magicians);
// Question-43: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("Answer 43:\n");
// Define functions to modify and display magician names
function makeGreat(magicians) {
    // Create a new array to store modified names
    let greatMagicians = [];
    // Loop through original array, adding "the Great" to each name
    for (let magician of magicians) {
        greatMagicians.push(magician + " The Great");
    }
    // Return the new array with modified names
    return greatMagicians;
}
function show_Magicians(magicians) {
    // Loop through the array and print each magician's name
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Define the original array of magicians' names
const magicians1 = ["David Copperfield", "Criss Angel", "Dynamo"];
// Create a copy of the original array using slice (shallow copy)
const greatMagicians = makeGreat(magicians.slice());
console.log("\nOriginal magicians:");
showMagicians(magicians);
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
// Question-44: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("Answer 44:\n");
function summarizeSandwich(...ingredients) {
    // Check if any ingredients were provided
    if (ingredients.length === 0) {
        console.log("You haven't chosen any ingredients for your sandwich.");
        return;
    }
    // Create a descriptive sentence based on the number of ingredients
    let summary = "Your sandwich includes:";
    if (ingredients.length === 1) {
        summary += " just";
    }
    else if (ingredients.length === 2) {
        summary += " and";
    }
    else {
        summary += ", ";
    }
    // Loop through ingredients and build the summary string
    for (let i = 0; i < ingredients.length; i++) {
        summary += ingredients[i];
        if (i < ingredients.length - 1) {
            summary += ", ";
        }
        else {
            summary += ".";
        }
    }
    console.log(summary);
}
summarizeSandwich("bread", "turkey", "cheese");
summarizeSandwich("bread", "lettuce", "tomato");
summarizeSandwich("bread");
