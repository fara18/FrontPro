const arrowEmpty = () => { }

const highLow = (a, b) => {
    if (a > b) {
        console.log(b + " is lowest number");
    } else if (a < b) {
        console.log(a + " is lowest number");
    } else console.log('Numbers are equal');
}

highLow(10, 1)

const howManyLetters = (word1, word2) => word1.length > word2.length ? word1 : word2

console.log(howManyLetters("la", "lal"))

const return7Symbols = pass1 => {
    if (pass1.length >= 7) {
        return true;
    } else return false
}
console.log(return7Symbols("1234567"));


/* Задача 5:

Написать стрелочную функцию, которая перебирает массив слов. Массив слов передается через аргумент. И возвращает нам самое длинное слово */
const stringArray = ["me", "you"]
const longestStringInArray = (array) => {
    let max_str = array[0].length;
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        let maxi = array[i].length;
        if (maxi > max_str) {
            longest = array[i];
            max_str = maxi;
        }
    }
    return longest;
}
console.log(longestStringInArray(stringArray));