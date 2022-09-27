"use strict";
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const youssef = new Person("Youssef", 1992);
// console.log(youssef);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const hamza = new Person("Youssef", 2021);
const yassen = new Person("Youssef", 2006);
console.log(youssef, hamza, yassen);

console.log(youssef instanceof Person);
youssef.calcAge();
console.log(youssef.__proto__);

*/
///////////////////////////////////////
// Prototypes
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

youssef.calcAge();
hamza.calcAge();

console.log(youssef.__proto__);
console.log(youssef.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(youssef));
console.log(Person.prototype.isPrototypeOf(hamza));

// .prototyeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(youssef.species, hamza.species);

console.log(youssef.hasOwnProperty("firstName"));
console.log(youssef.hasOwnProperty("species"));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(youssef.__proto__);
// Object.prototype (top of prototype chain)
console.log(youssef.__proto__.__proto__);
console.log(youssef.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

///////////////////////////////////////
// ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .Prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Instance methods
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

PersonCl.hey();

const youssef = new PersonCl("Youssef ashraf", 1992);
console.log(youssef);
youssef.calcAge();

// get
console.log(youssef.age);

console.log(youssef.__proto__ === PersonCl.prototype);

// same method greet() in class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

youssef.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);
///////////////////////////////////////
// Setters and Getters

const account = {
  owner: "Hamza",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

///////////////////////////////////////
// Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const hamza = Object.create(PersonProto);
console.log(hamza);
hamza.name = "Hamza";
hamza.birthYear = 2021;
hamza.calcAge();

console.log(hamza.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 2023);
sarah.calcAge();
*/

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
*/

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
  }
}

class StudentCl extends PersonCl {
  //   constructor(fullName, birthYear, course) {
  //     // Always needs to happen first!
  //     super(fullName, birthYear);
  //     this.course = course;
  //   }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// const hamza = new StudentCl("Hamza Youssef", 2012);

const hamza = new StudentCl("Hamza Youssef", 2012, "Computer Science");

hamza.introduce();
hamza.calcAge();
*/

///////////////////////////////////////
// Inheritance Between "Classes": Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2015, "Computer Science");
jay.introduce();
jay.calcAge();
*/
///////////////////////////////////////
// Another Class Example
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);

      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Hamza", "EGY", 2122);

acc1.deposit(150);
acc1.withdraw(140);
console.log(acc1);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1._pin);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
