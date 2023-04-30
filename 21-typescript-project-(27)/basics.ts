// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

// Functions & Types

function add(a: number, b: number) {
  // The typescript infere the return type if you do not explicit it
  return a + b;
}

function printOutput(value: any) {
  //When the function does not return anything its type will be void
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array:T[], value:T){
    const newArray = [value, ...array];
    return newArray
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeginning(demoArray, 0)
const stringArray = insertAtBeginning(['a','b','c'], 'z')