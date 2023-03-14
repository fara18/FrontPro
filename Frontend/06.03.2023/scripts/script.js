let a = 10;
a = 5;
/* console.log(a); */
const b = 18;
/*b=1200;  dont do */

// Задана переменная number. Если значение в number больше или равно 10, то вывести в консоль 'hello', а если меньше - 'hi'

let number = 15;
number = 1;

/* if (number >= 10) {
    console.log('hello')
} else {
    console.log('hi')
}
 */
/* number >= 10 ? console.log('hello') : console.log('hi'); */

/* for (let i = 100; i >= 57; i--) {
    console.log(i);
} */

const array = [6, 7, 1, -10, 78, 18, -5, -38, 9];
let devArray = [array]

console.log(devArray);

for (let index = 0; index < array.length; index++) {
    if (array[index] > 0) {
        devArray.push(array[index] / 2)
    }

}
console.log(devArray);