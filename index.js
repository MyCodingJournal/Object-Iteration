//Object Iteration

//Looping is the process of executing a set of statements repeatedly until a condition is met. It's great for when we want to do something a specific number of times (for loop) or unlimited times until the condition is met (while or do while loop).

//Iteration is the process of executing a set of statements once for each element in a collection. We can accomplish this with a for loop:

let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//or with a while loop:

let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let j = 0;

while (j < myArray.length) {
  console.log(myArray[j++]);
}

//but neither is very pretty. The for...of statement gives us a better to way.
//for...of- Using for...of, the code above becomes:

const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const element of myArray) {
  console.log(element);
}

//NOTE*:Using a construct that is specifically meant for iteration results in much cleaner code: there's no initialization of a counter, no condition, no incrementing the counter, and no bracket notation to access elements in the array (myArray[i]).

//NOTE*:Usage
//Use a for...of statement anytime you want to iterate over an array.

//-----------------------------------------------------------------
//Iterating over arrays
//Iteration Practice- for...of statements

const gifts = ["teddy bear", "drone", "doll"];

for (const items of gifts) {
   console.log (`Wrapped ${items} and added a bow!`);
//}
//Wrapped teddy bear and added a bow!
//Wrapped drone and added a bow!
//Wrapped doll and added a bow!

for (const elements of gifts) {
  console.log(elements);
}
//teddy bear
//drone
//doll

//-----------------------------------------------------------------
//Iterating over objects
//The for...in statement is similar to for...of; it's generally used for iterating over the properties in an object. The statement follows this syntax:

for (const [KEY] in [OBJECT]) {
  // Code in the statement body
}

//The for...in statement iterates over the properties in an object, but it doesn't pass the entire property into the block. Instead, it only passes in the keys:

const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: "10004";
};

for (const key in address) {
  console.log(key);
}

// LOG: street1
// LOG: street2
// LOG: city
// LOG: state
// LOG: zipCode

//Accessing the object's values is as simple as combining the passed-in key with the bracket operator:

const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: "10004"
};

for (const key in address) {
  console.log(address[key]);
}

// LOG: 11 Broadway
// LOG: 2nd Floor
// LOG: New York
// LOG: NY
// LOG: 10004

//NOTE*:Usage
//Use a for...in statement whenever you want to enumerate the properties of an object.
