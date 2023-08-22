function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
} 
const sum = add(5, 7);
const sumOne = add();
const sumTwo = add(6);

function friends(number = []){

}

function fullName(firstName, lastName = ''){
    const full = firstName + " " + lastName;
    console.log(full);
    return full
}

const fullUserName = fullName('Rakibul', 'Hasan');
const fullNames = fullName();
