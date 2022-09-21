// 1 переменные

// const firstName = 'Dmitry'
// // const lastName = 'Gurin' // string 
// let age = '32'
// const isProgrammer = true // bollean
// const _ = 'private'
// const $ = 'value'
// const withNum5 = '5'
// const if = 'private' // ошибка
// const 5if = 'private' // ошибка

// 2 Мутирование

// console.log('Имя человека:' + firstName + ', возраст человека: ' + age)
// alert('Имя человека:' + firstName + ', возраст человека: ' + age)
// const lastName = prompt ('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы

// let currentYear = 2020
// const birhtYear = 1993
// const age = currentYear - birhtYear
// console.log(age)
// const a = 10
// const b = 5
// let c = 32
// // c = c + a
// c+=a
// c-=a
// c*=a
// c/=a
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Dima'
// const age = 32
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)


// 5 Приоритет операторов

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)
// console.log(birthYear)

// 6 Условные операторы

// const courseStatus = 'pending' // ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и можно проходить его') 
// } else if (courseStatus === 'pending') {
//     console.log('Курс в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }
// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2)
// const isReady = true 
// if (isReady) {
//     console.log('Всё готово! :)')
// } else {
//     console.log('Всё не готово! :(')
// }
// isReady ? console.log('Всё готово! :)') : console.log('Всё не готово! :(')

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// 8 Функции

// function calculateAge(year) {
//     return 2020 - year
// }
// const myAge = calculateAge(1993)
// console.log(myAge)
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//     console.log('Человек по иммени ' + name + ' сейчас имеет возраст '+ age)
//     } else {
//         console.log('Это уже будущее') }
// }
// logInfoAbout('Dima', 1999)
// logInfoAbout('Лена', 2022)

// 9 Массивы

// const cars = ['Мазда', 'Мерседес', 'Форд']
// // const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
// cars[0] = 'Porshe'
// console.log(cars)
// cars[3] = 'Мазда'
// cars[cars.length] = 'Жигули'
// console.log(cars)

// 10 Циклы

// const cars = ['Мазда', 'Мерседес', 'Форд']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
// for (let car of cars){
//     console.log(car)
// }  

// 11 Объекты

// const person = {
//     firstName: 'Dima',
//     lastName: 'Gurin',
//     year: 1990,
//     languages: ['Ru', 'En'],
//     hasWife: true,
//     greet: function() { // метод а не функция, так как внутри объекта
//         console.log('greet from person')
//     }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = false
// person.isProgrammer = false
// person.greet()
// console.log(person)
