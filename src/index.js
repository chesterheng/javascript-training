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
