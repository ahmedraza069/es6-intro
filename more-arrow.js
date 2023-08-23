// Simple Arrow function
const difference = (x, y) => x - y;
// Multiply arrow function with huge parameter;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;
const getName = (person) => person.name;
const student = {
  name: "Rakibul Hasan Raza",
  age: 21,
};
const name = getName(student);
const age = getAge(student);
console.log(name);
console.log(age);

const getThird = (numbers) => numbers[3];
const third = getThird([37, 4, 87, 3, 23, 24, 353, 353, 4, 3, 53, 34]);
console.log(third);
// single parameter
const doubleIt = num => num * 2;
console.log(doubleIt(50));
// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
// if you get anything returned form this function. then you have to use the return keyword
}