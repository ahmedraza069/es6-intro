const actor = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    isFamous: true
  };
// if right side is an object left side of destrcturing will be object as well
// use property name as a variable that contains the property value 
  const {firstName} = actor;
  console.log(firstName);
  const {age} = actor;
  console.log(age);
// console.log( actor.firstName);   // Output: John
console.log(actor.lastName);    // Output: Doe
// console.log(actor.age);         // Output: 30
console.log(actor.gender);      // Output: male
console.log(actor.isFamous);    // Output: true

// Array distructuring
function doubleThem(a, b){
    return [a*2, b*2];
}
const [first, second] = doubleThem(5, 10);
console.log(first, second);



