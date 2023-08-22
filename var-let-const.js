// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 50;
const rich = money + 30;
console.log(rich);

const array = [4, 344, 35, 5, 53, 34, 335];
// array = [8238, 34839, 354, 903, 95, 45, 83, 9, 3, 49, 3];
// console.logj(array);
array[3] = 'Hello';
console.log(array);

const obj = {
    name: "Rakibul Hasan",
    age: 21,
}

// obj = {
//     name: 'raza',
//     age: 22
// }

obj.name = 'Rakibul Hasan Raza';

console.log(obj);


// You can changle array and object in element you cannot reassign.