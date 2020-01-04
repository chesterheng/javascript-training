console.log('Hello ');

// Lab 1: Data types and variables

const firstName = 'John';
const lastName = 'Doe';
const age = 20;
const hasDrivingLicence = true;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hasDrivingLicence);

// Lab 2: The functions

const display = (firstName, lastName) => {
  return firstName + " " + lastName.toUpperCase();
};

const displayTemplate = (firstName, lastName) => {
  return `${firstName} ${lastName.toUpperCase()}`;
};

console.log(display(firstName, lastName));
console.log(displayTemplate(firstName, lastName));

// Lab 3: The objects - prototypes

// Person function has prototype property that point to Person prototype object
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Person prototype object contains toString() and constructor function
Person.prototype.toString = function () {
  return `${this.firstName} ${this.lastName} ${this.age} years`;
};

function Adult(firstName, lastName, age, hasDrivingLicense) {
  // this is a placeholder for current object instance
  // call() method calls a function with this and arguments
  Person.call(this, firstName, lastName, age);
  this.hasDrivingLicense = hasDrivingLicense;
}

Adult.prototype.toString = function () {
  return `${Person.prototype.toString.call(this)} and possession of license ? ${this.hasDrivingLicense}`;
};

function Child(firstName, lastName, age, gradeLevel) {
  Person.call(this, firstName, lastName, age);
  this.gradeLevel = gradeLevel;
}

Child.prototype.toString = function () {
  return `${Person.prototype.toString.call(this)} in grade level of ${this.gradeLevel}`;
};

const person1 = new Person('Lecoq', 'Jordan', 6);
const person2 = new Person('Lecoq', 'Vanessa', 12);

// Adult object has __proto__ property which point to Adult prototype object
const adult1 = new Adult('Doe', 'John', 30, true);
const adult2 = new Adult('Dupont', 'Roger', 35, false);
const adult3 = new Adult('Martin', 'Marie', 32, true);

const child1 = new Child('Lecoq', 'Jordan', 6, 'Primary 1');
const child2 = new Child('Lecoq', 'Vanessa', 12, 'Primary 6');

console.log(Person.prototype);
console.log(person1);
console.log(person2);
console.log(person1.toString());
console.log(person2.toString());

console.log(Adult.prototype);
console.log(adult1);
console.log(adult2);
console.log(adult3);
console.log(adult1.toString());
console.log(adult2.toString());
console.log(adult3.toString());

console.log(Child.prototype);
console.log(child1);
console.log(child2);
console.log(child1.toString());
console.log(child2.toString());
