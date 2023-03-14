/* let sum = 0;
for (let i = 20; i <= 35; i++) {
    sum += i

} console.log(sum);
let mult = 1
for (let i = 10; i <= 15; i++) {
    mult *= i

} console.log(mult);

const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5];
const array = [];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        array.push(numbers[index])
    }

} console.log(array);

const even = []

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        even.push(element)
    }

} console.log(even);

const evenNegative = []

for (let index = 0; index < numbers.length; index++) {
    numbers[index] % 2 === 0 && numbers[index] < 0 ? evenNegative.push(numbers[index]) : ''
} console.log(evenNegative);

const arrayWith5 = []
for (let index = 0; index < numbers.length; index++) {

    if (numbers[index] % 10 === 5 ||numbers[index] % 10 === -5 ) {
        arrayWith5.push(numbers[index]);
    }

} console.log(arrayWith5);

 */

const array = [1, 5, -7, -88, 9, 44, 15, 35, -5];
const newArray = []
for (let index = 0; index < array.length; index++) {
    newArray.push(array[index] <0 ? array[index]*-1 %10 : array[index]%10)
} console.log(newArray);
