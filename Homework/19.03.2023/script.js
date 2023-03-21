//Напишите функцию, которая принимает два числа и возвращает большее из них.
const getHighest = (num1, num2) => {
    if (num1 > num2) {
        console.log(`Highest number is-${num1}`);
    }
    else if (num2 > num1) {
        console.log(`Highest number is-${num2}`);
    } else console.log(`${num1} and ${num2} are equal`);
}

// Напишите функцию, которая принимает число и возвращает его квадрат.
const getSquared = num => Math.pow(num, 2);

// Напишите функцию, которая принимает строку и возвращает ее длину.
const getLength = string => string.length

// Напишите функцию, которая принимает два числа и возвращает их сумму.
const getSum = (num1, num2) => num1 + num2

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором все числа умножены на 2.
let array = [1, 2, 3, 4, 5]
let newArray = []

const getSquaredArray = array => {
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    } return newArray
}

// Напишите функцию, которая принимает строку и возвращает новую строку, в которой все гласные заменены на символ '*'.
const replaceVowel = string => string.replace(/[aeiou]/gi, '*');

// Напишите функцию, которая принимает массив чисел и возвращает среднее значение.
let average = 0
const getAverage = array => {

    for (let i = 0; i < array.length; i++) {
        average += array[i]
    } return average / array.length
}








