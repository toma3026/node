// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const result1 = Number(numberOne) + Number(numberTwo);
console.log(result1);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result2 = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2);
console.log(result2);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = ((one + two + three) / 3).toFixed(5);
console.log(average);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";

// Get me the character "c"

// letters.charAt(2);
const result3 = letters[2];
console.log(result3);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const result4 = fact.replace("javascript", "Javascript");
console.log(result4);

// --------------------------------------