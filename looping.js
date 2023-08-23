// for of use on array r string not in object
// for in use object
const array = [35,45,75,65,58,34,1,423,5,]
for (const num of array) {
    console.log(num);
}
const names = 'Rakibul Hasan Raza';
for (const char of names) {
    console.log(char);
}

const actor = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    isFamous: true
  };
  for (const item in actor) {
    const value = actor[item];
    console.log(item, value);
  }

const keys =   Object.keys(actor);
console.log(keys);
for (const key of keys) {
    const value = actor[key];
    console.log(key, value);
}

