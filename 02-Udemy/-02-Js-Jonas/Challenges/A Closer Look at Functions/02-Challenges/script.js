"use strict";
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("Lm123");
createBooking("Lm123", 2, 800);
createBooking("Lm123", 2);
createBooking("Lm123", 5);
createBooking("Lm123", undefined, 1000);
*/

/*
const flight = "LM234";
const youssef = {
  name: "Youssef Ashraf",
  passport: 2340879084,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LM999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 2340879084) {
    alert("Check In");
  } else {
    alert("Wrong Passport!");
  }
};

checkIn(flight, youssef);
console.log(flight);
console.log(youssef);

// Is the same as doing...
// const flightNum = flight;
// const passenger = youssef;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(youssef);
checkIn(flight, youssef);
*/

/*
///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original starting : ${str}`);

  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);
*/

/*
///////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Youssef");
greeterHey("Ashraf");
greet("Hello")("Ashraf");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Hi")("Ashraf");
*/

/*
///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  //book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} Booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Youssef Ashraf");
lufthansa.book(635, "Yassen Ashraf");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 234, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 234, "Sarah Williams");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 586, "Mary Cooper");
console.log(swiss);

// Apply method
const flightData = [548, "Ali Ahmed"];
book.apply(swiss, flightData);
console.log(swiss);
// 🔴 This apply method is not that used anymore in modern JavaScript because now, we actually have a better way of doing the exact same thing.

// pest way
book.call(swiss, ...flightData);
// 🟢 And so right now, with modern JavaScript, I prefer to just always use the ==> Call method and then spread out the arguments from an array like this.
*/

/*
///////////////////////////////////////
// The bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(358, "Hamza Youssef");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Youssef ashraf");
bookEW23("Hamza ashraf");
console.log("//////////////////////////");
//So this is correct. And by the way, what we did here, so, basically specifying parts of the argument beforehand, is actually a common pattern called partial application. So essentially, partial application means that a part of the arguments of the original function are already applied, so which means, already set. And so that's exactly what the bookEW23 function is, right?

// With Event Listeners
lufthansa.planes = 300;
console.log(lufthansa.planes); // here print current plane number without detiles buy plane
lufthansa.buyPlane = function () {
  console.log(this); //print function

  this.planes++;
  console.log(this.planes); // here print plane number
};

lufthansa.buyPlane();

document
  .querySelector(".buy") //here we made select element
  .addEventListener("click", lufthansa.buyPlane.call(lufthansa)); // here after made select element made call function it's name buyPlane

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.25);
console.log(addVAT2(300));
console.log(addVAT2(150));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      // "Poll results are 13, 2, 4, 1".
      console.log(`poll result are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "String");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "String");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

/*
//////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log("This will never run agin");
};
runOnce();

// (IIFE)
(function () {
  console.log("This will never run agin");
})();

(() => console.log("This will ALSO run agin"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/*
///////////////////////////////////////
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);
*/

/*
///////////////////////////////////////
// More Closure Examples
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);
// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 2;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} Seconds`);
};

boardPassengers(180, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
