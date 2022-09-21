// 1 Функции

// Function Declaration - обращаемся когда захотим, 
// даже до того как объявим, см. ниже

// function greet(name) {
//     console.log('Привет - ', name);
// }

// Function Expression

// const greet2 = function () 
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name);
// } 

// greet('Лена')
// greet2('Коля')

// // функцию вызываем выше, но всё работает 
// function greet(name) {
//     console.log('Привет - ', name);
// }

// console.log(typeof greet) // тип function
// console.dir(greet)


// 2 Анонимные функции

// let counter = 0;
// const interval = setInterval(function() {
//     if (counter === 5){
//     clearInterval(interval) // clearTimeout
//     }
//     else {
//         console.log(++counter)
//     }
// }, 1000)


// 3 Стрелочные функции

// function greet(name) {
//     console.log('Привет - ', name);
// }

// const arrow = (name) => { console.log('Привет - ', name) }
// arrow('Дима')

// const arrow2 = name => console.log('Привет - ', name)
// arrow2('Дима')

// const pow2 = num => num ** 2
// console.log(pow2(5))


// 4 Параметры по умолчанию

// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum(41, 5));

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res);

// 5 Замыкание

// function createMember(name) {
//     return function(lastName) {
//         console.log(`${name} ${lastName}`)
//     }
// }

// const logWithLastName = createMember('Дмитрий')
// console.log(logWithLastName('Gurin'))

// // Для безопасности? Нет доступа к переменной name
