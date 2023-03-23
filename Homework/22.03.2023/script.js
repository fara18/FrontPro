// ДЗ
// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.
const arr = ["fara", "davlya"]
const getUpper = array => array.map(elem => elem[0].toUpperCase() + elem.slice(1))
console.log(getUpper(arr));
// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.
const nums = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5]

const getPositive = array => array.filter(elem => elem > 0 )
console.log(getPositive(nums));
// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.
const nums1 = [1, 2, 3, 4, 5]
const getOdd = arr => arr.filter(elem => elem % 2 === 1 )
console.log(getOdd(nums1));
// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.
const array = [15,3,20,21,4,5,6,18]
const filteredArray = array.filter(elem=> elem%3===0)
console.log(filteredArray);

// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.
const numbers  = [11,2,3,4,20,25,19,18,17];
const filterArray = numbers.filter(elem => elem>10 && elem<20 ? elem : '')
console.log(filterArray);
// 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.
const string_and_numbers = ["fara",18]
const filtered = string_and_numbers.filter(elem=>typeof elem === 'number')
console.log(filtered);
