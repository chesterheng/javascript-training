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

// Lab 3: The objects - classes

class Person {
  constructor (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  toString() {
    return `${this.firstName} ${this.lastName} ${this.age} years`;
  }
}

class Adult extends Person {
  constructor (firstName, lastName, age, hasDrivingLicense){
    super(firstName, lastName, age);
    this.hasDrivingLicense = hasDrivingLicense;
  }
  toString() {
    return `${super.toString()} and possession of license ? ${this.hasDrivingLicense}`
  }
}

class Child extends Person {
  constructor (firstName, lastName, age, gradeLevel){
    super(firstName, lastName, age);
    this.gradeLevel = gradeLevel;
  }
  toString() {
    return `${super.toString()} in grade level of ${this.gradeLevel}`;
  }
}

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

// Lab 4: Control structure

const people = [adult1, adult2, adult3, child1, child2];

console.log("\neveryone - for");
for(let i = 0; i < people.length; i++) {
    console.log(people[i].toString());
}

console.log("\nshow only even person - for");
for(let i = 0; i < people.length; i += 2) {
    console.log(people[i].toString());
}

console.log("\neveryone - forEach");
people.forEach(person => console.log(person.toString()));

console.log("\nshow only even person - forEach");
people.forEach((person, index) => index % 2 === 0 && console.log(person.toString()));

// Lab 5: Advanced functions and asynchronous programming

const displayPeopleIdentity = people => {
  for (let i = 0; i < people.length; i++) {
    setTimeout(() => console.log(`displayPeopleIdentity ${people[i].toString()} ${i}`), 1000);
  }
}

const displayPeopleIdentityIIFE = people => {
  for (let i = 0; i < people.length; i++) {
    (function (x) {
      setTimeout(() => console.log(`displayPeopleIdentityIIFE ${people[x].toString()} ${x}`), 2000);
    })(i);
  }
}

const displayPeopleIdentityForEach = people => {
  people.forEach((person, index) =>
    setTimeout(() => console.log(`displayPeopleIdentityForEach ${person.toString()} ${index}`), 3000)
  );
}

const displayPeopleIdentityLet = people => {
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    setTimeout(() => console.log(`displayPeopleIdentityLet ${person.toString()} ${i}`), 4000);
  }
}

const delegatedFunction = (index, array) => 
  console.log(`displayPeopleIdentityDelegatedFunction ${array[index].toString()} ${index}`);

const displayPeopleIdentityDelegatedFunction = people => {
  for (var i = 0; i < people.length; i++) {
    setTimeout(delegatedFunction(i, people), 5000);
  }
}

displayPeopleIdentity(people);
displayPeopleIdentityIIFE(people);
displayPeopleIdentityForEach(people);
displayPeopleIdentityLet(people);
displayPeopleIdentityDelegatedFunction(people);

// Lab 6: Error Management

const displayPeopleIdentityError = people => {
  people.forEach(person => {
    setTimeout(() => {
      try {
        if (person instanceof Child) {
            const error = new Error("It is a child");
            error.name = `${person.firstName} ${person.lastName}`;
            throw error;
        }
        console.log(`displayPeopleIdentityError ${person.toString()}`);
      } catch (error) {
        console.log(error);
      }

    }, 1000);
  })
}

displayPeopleIdentityError(people);

// Lab 7: Libraries

import _ from "lodash";
import moment from "moment";

// Create a function to find all adults
const findAllAdults = people => _.filter(people, ({ age }) => age >= 18);

// Create a function to separate adults between those who have the license, and those who do not 
const findAllDrivers = people => _.filter(people, ({ hasDrivingLicense }) => hasDrivingLicense);

// Create a function to create a new list of people or everyone is 1 year older
const addOneYear = people => 
  _.map(people, person => {
    person.age += 1;
    return person;
  });

// Create a function to calculate the year of birth of a person based on the current date and age
const calculateYearOfBirth = ({ age }) => moment().subtract(age, 'years').year();

// Create a function to calculate the average age of people whose first name has more than 4 letters
const calculateAverageAgeWithLongFirstName = people =>
  _(people)
    .filter(({ firstName }) => firstName.length > 4)
    .map(({ age }) => age)
    .reduce((previous, current, i, array) => previous + (current / array.length), 0);

const calculateAverageAgeWithLongFirstName2 = people =>
  _(people)
    .filter(({ firstName }) => firstName.length > 4)
    .meanBy('age');

console.log('\nFind all adults');
console.log(findAllAdults(people).join('\n'))

console.log('\nFind all drivers');
console.log(findAllDrivers(people).join('\n'));

console.log('\nAdd one year for everyone');
console.log(addOneYear(people).join('\n'));

console.log('\n');
for (let i = 0; i < people.length; i++) {
  console.log(`${people[i].firstName} ${people[i].lastName} was born in ${calculateYearOfBirth(people[i])}`);
}

console.log(`\nAverage age = ${calculateAverageAgeWithLongFirstName(people)}`);
console.log(`\nAverage age = ${calculateAverageAgeWithLongFirstName2(people)}`);

const addOneYearNoSideEffect = people => 
  _.map(people, person => _.assign(new Person(), person, { age: person.age + 1 }));

addOneYear(people);
console.log(`Average age = ${calculateAverageAgeWithLongFirstName(people)}`);
addOneYearNoSideEffect(people);
console.log(`Average age = ${calculateAverageAgeWithLongFirstName(people)}`);

// Lab 8: Create a small program

/**
 * Car
 * @constructor
 * @param {String} brand        Car brand
 * @param {String} model        Model of the car
 * @param {Number} acceleration Power of acceleration
 * @param {Number} maxSpeed     maximum speed of the car
 * @param {String} message      Description of the car
 */
class Car {
  constructor(brand, model, acceleration, maxSpeed, message){
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.distanceTraveled = 0;
    this.acceleration = acceleration;
    this.maxSpeed = maxSpeed;
    this.startupMessage = message;
    this.started = false;
  }

  start() {
    if (!this.started) {
      this.distanceTraveled = 0;
      console.log(this.startupMessage);
      this.started = true;
    }
  }

  accelerate() {
    if (!this.started) {
        throw new Error("Unable to accelerate please start me first !");
    }
    if (this.speed < this.maxSpeed) {
        this.speed += this.acceleration;
        this.speed = Math.min(this.speed, this.maxSpeed);
    }
  }

  updateDistance() {
    this.distanceTraveled += this.speed / 3600;
  }
}


/**
 * Ferrari F355
 * @constructor
 */
class F355 extends Car {
    constructor() {
      super('Ferrari', 'F355', 20, 250, 'I am Ferrari F355, starting !');
    }
}


/**
 * Audi R8
 * @constructor
 */
class AR8 extends Car {
  constructor() {
    super('Audi', 'R8', 30, 230, 'I am Audi R8, starting');
  }
}


/**
 * Peugeot 206
 * @constructor
 */
class P206 extends Car {
  constructor() {
    super('Peugeot', '206', 15, 150, 'I am Peugeot 206, starting');
  }
}


/**
 * Draw a car by lot and remove it from the car list.
 * @return return the car drawn.
 */
const drawCar = cars => {
    const random = Math.floor(Math.random() * cars.length);
    const choosen = cars.splice(random, 1)[0];
    return choosen;
}

/**
 * Draw 2 cars and remove them from the car list.
 * @return return a table with the 2 cars drawn.
 */
const draw2Car = cars => [drawCar(cars), drawCar(cars)];

/**
 * Returns the vehicle that has traveled 1km.
 * @return return vehicle having traveled 1km, null if no vehicle has traveled 1km.
 */
const getCar1KmDone = cars => {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].distanceTraveled >= 1) {
        return cars[i];
    }
  }

  return null;
}

const startCourse = cars => {

  const updateCourse = () => {
    for (let i = 0; i < carsForTheRace.length; i++) {
      try {
        const car = carsForTheRace[i];
        car.accelerate();
        car.updateDistance();
        console.log(`${car.brand} ${car.model} roll at ${car.speed} km/h and traveled ${car.distanceTraveled.toFixed(2)} km`);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    
    const winner = getCar1KmDone(carsForTheRace);
    if (!winner) {
      setTimeout(updateCourse, 1000);
    } else {
      console.log(`${winner.brand} ${winner.model} won`);
    }
  }

  const carsForTheRace = draw2Car(cars);
  carsForTheRace[0].start();
  carsForTheRace[1].start();

  updateCourse();
}

const r8 = new AR8();
const f355 = new F355();
const p206 = new P206();

startCourse([r8, f355, p206]);
