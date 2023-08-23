const actor = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    isFamous: true
  };
//   console.log(actor);
//  All properties name
  const keys = Object.keys(actor);
  // [ 'firstName', 'lastName', 'age', 'gender', 'isFamous' ] 
//  All property value
  const values = Object.values(actor);
//   [ 'John', 'Doe', 30, 'male', true ]
// 
const pair = Object.entries(actor);
// [
//   [ 'firstName', 'John' ],
//   [ 'lastName', 'Doe' ],
//   [ 'age', 30 ],
//   [ 'gender', 'male' ],
//   [ 'isFamous', true ]
// ]
//   console.log(values);
//   console.log(keys);
//   console.log(pair);

//   Delete object ways
delete actor.firstName
// console.log(actor);
// 
const {isFamous, ...newObj} = actor;
console.log(newObj);
//   object freeze(glass)
Object.freeze(actor);
actor.source = 'Bangladesh';
// console.log(actor);