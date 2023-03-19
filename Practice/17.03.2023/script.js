/* const myInterval = (func,number)=> {
    for (let i = 0; i < number; i++) {
        func();
        
    }
}
const getName = () => console.log("Fara");

console.log(myInterval(getName,20)); 

const paragraph = (text) => {
    document.body.innerHTML = `<p>${text}</p>`
}
paragraph("Fara")

const span = document.querySelector("span")
const p = document.querySelector("p")

const getElement = (element) => element

getElement(p)
getElement(span)*/
/*
/*
    Создать объект названием Calculations
    У объекта должны быть свойства:
    - squarePow - это должна быть функция которая возводит число в квадрат
    - cubePow - это должна быть функция которая возводит число в куб
    - downNumber - это должна быть функция которая округлять число в меньшую сторону
    Каждая функция должна принимать один аргумент (число) и вовращать результат
    */


let calculations = {
    squarePow: power = number => Math.pow(number,2),
    cubePow: cube = number => Math.pow(number,3),
    downNumber: down = number => Math.floor(number),   
    }
    console.log(calculations.squarePow(10));
    console.log(calculations.cubePow(10));
    console.log(calculations.downNumber(9,9));