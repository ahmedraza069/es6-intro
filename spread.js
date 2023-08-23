const max = Math.max(23, 4, 734, 34, 343, 43, 43, 4, 21, 3, 335, 76, 643);
console.log(max);

const numbers = [34, 46, 4, 34, 23, 23, 23, 43, 54, 6, 44];
const numbersMax = Math.max(...numbers);
console.log(numbersMax);

// use spread operator to copy
const nums1 = [243,454,557]
const num3 = [...nums1]
console.log(num3);
nums1.push(100);
console.log(nums1);

// advanced
const num4  = [...nums1, 9999]
console.log(num4);



