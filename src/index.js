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
