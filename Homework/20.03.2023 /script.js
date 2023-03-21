// ДЗ (for и forEach)

// 1. Дан массив с числами. Вычислить сумму элементов массива

/* Using forLoop */
const array = [5, 5];
let arraySum = 0;

for (i = 0; i < array.length; i++) {
    arraySum += array[i];
}
/* Using forEach */
array.forEach(sum => arraySum += sum);

// 2. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

const strArr = ["Hi", "Hello i'm Faruh", "1234567"];
let newArr = [];

/* Using forLoop */
for (i = 0; i < strArr.length; i++) {
    strArr[i].length >= 7 ? newArr.push(strArr[i]) : '';
}
/* Using forEach */
strArr.forEach(str => str.length >= 7 ? newArr.push(str) : '')

// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d
const stringArray = ["day", "Down", "apple"];
const arrayWithD = []

/* Using forLoop */
for (let i = 0; i < stringArray.length; i++) {
    stringArray[i].charAt(0) === "d" || stringArray[i].charAt(0) === "D" ? arrayWithD.push(stringArray[i]) : '';
}
/* Using forEach */
stringArray.forEach(index => index.charAt(0) === "d" || index.charAt(0) === "D" ? arrayWithD.push(index) : '')

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень

let powArr = [];

/* Using forLoop */
for (let i = 0; i < array.length; i++) {
    powArr.push(Math.pow(array[i], 3))
}
/* Using forEach */
array.forEach(index => powArr.push(Math.pow(index, 3)))

// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7
const arr = [27, 17, 9, 78, 7, 0, 9, 2];
let arrayWith7 = [];

/* Using forLoop */
for (i = 0; i < arr.length; i++) {
    arr[i] % 10 === 7 ? arrayWith7.push(arr[i]) : ''
}
/* Using forEach */
arr.forEach(index => index % 10 === 7 ? arrayWith7.push(index) : '');

