const max = Math.max(6, 3, -10, 73);/* returns highest number */
const min = Math.min(6, 3, -10, 73);/* returns lowest number */
const abs = Math.abs(-4)/* returns absolute number */
const ceil = Math.ceil(4.00001); // 5 - вверх
const floor = Math.floor(4.73); // 4 - вниз
const round = Math.round(4.73); // 5 - по правилам математики
const power = Math.pow(6, 2); // 6 ** 2 === 36
const sqrt = Math.sqrt(36); // 6
const random = Math.random(); // случайное дробное число (от 0 до 1)

const getMax = (a, b, c) => Math.max(a, b, c)



/* 4. Написать функцию, которая принимает два числа - основание степени и степень и возвращает результат возведения числа в степень*/

const pow = (num1, num2) => Math.pow(num1, num2)
console.log(pow(6, 2));

const randomNum = Math.round(Math.random() * 15 + 15);
console.log(randomNum);

const array = ["lala", "lal", "asdsdda", "ass"]
const arraySorted = []
const getArray = (arrayToSort) => {
for (let index = 0; index < arrayToSort.length; index++) {
    if (arrayToSort[index].length>5) {
        arraySorted.push(arrayToSort[index])
        
    }
    
}return arraySorted
}
console.log(getArray(array));
