// ДЗ (массив users)
const users = [
    {
        id: 1,
        firstname: 'Anton',
        age: 28,
        active: true
    },
    {
        id: 2,
        firstname: 'Irina',
        age: 18,
        active: true
    },
    {
        id: 3,
        firstname: 'Olga',
        age: 32,
        active: false
    },
    {
        id: 4,
        firstname: 'Danila',
        age: 14,
        active: true
    },
    {
        id: 5,
        firstname: 'Ivan',
        age: 54,
        active: false
    }
]
// 1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]
console.log(users.map(({ age }) => age));
// 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'
console.log(users.map(({ firstname, age }) => "Name:" + firstname + ",age:" + age));
// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I
console.log(users.filter(({ firstname }) => firstname.charAt(0).toLowerCase() === "i"));

// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'
console.log(users.map(({ firstname, age }) => age >= 18 ? `Name:${firstname}, age:${age}` : ''));
// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи
console.log(users.filter(({ active, age }) => active === true && age >= 18));
// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O
console.log(users.filter(({ firstname }) => firstname.charAt(0).toLowerCase() !== "o"));
// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре
console.log(users.filter(({ active, age }) => active === true && age >= 18).map(({ firstname }) => firstname.toLowerCase()));

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())
console.log(users.sort((a, b) => a.age - b.age));
// 2. Найти сумму возрастов всех пользователей (.reduce())
console.log(users.reduce(function (arr, obj) { return arr + obj.age },0));
