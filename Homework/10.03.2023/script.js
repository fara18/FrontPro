/* Напишите цикл, который выводит в консоль числа от 1 до 10. */
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

/* Напишите цикл, который находит наименьшее число в массиве. */
const array = [30, 20, 50, 70, 10, 40, 17];
const min = Math.min(...array)
console.log(`Lowest number in array is-${min}`);

/* Напишите цикл, который считает сумму всех чисел от 1 до 100. */
let sum = 0
for (let index = 1; index <= 100; index++) {
    sum += index

} console.log(`Sum of numbers from 1 to 100-${sum}`);

/* Напишите цикл, который выводит в консоль каждый второй элемент массива. */
const arrayWith2number = []
for (let index = 0; index < array.length; index += 2) {
    arrayWith2number.push(array[index])
} console.log('Array with 2nd elements only-' + arrayWith2number);

/* Напишите цикл, который находит наибольшее число в массиве. */
let highest = 0;
const maxNum = (num) => {
    for (let index = 0; index < num.length; index++) {
        num[index] > highest ? highest = num[index] : ""
    }
    return highest;
}
console.log('Highest number in array-' + maxNum(array));


/* Средний уровень сложности:*/

/* Напишите цикл, который выводит в консоль все простые числа от 2 до 100.  */


/* Напишите цикл, который находит среднее арифметическое всех чисел в массиве.*/
let average = 0
for (let index = 0; index < array.length; index++) {
    average += array[index]
}
average = average / array.length
console.log("Average number in array is-" + average);

/*
Напишите цикл, который выводит в консоль таблицу умножения на 5.*/

for (let index = 0; index <= 10; index++) {
    console.log(index + '*5-' + 5 * index)
}
/* Напишите цикл, который переворачивает порядок элементов в массиве. */
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}


/*Напишите цикл, который находит сумму элементов массива, кратных 3 или 5.*/