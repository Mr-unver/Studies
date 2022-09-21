// 1 Number

// const num = 42 // integer
// const float = 42.2 // float
// const pow = 10e3
// console.log(num)
// console.log(float)
// console.log(pow)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log('Math.pow', Math.pow(2,53)-1)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.Nan) // Not a Number
// console.log(typeof Nan)
// const weird = 2 / undefined
// console.log(weird)
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(isFinite(42)) //console.log(Number.isFinite())
// console.log(isFinite(Infinity)) // конечна ли бесконечность?
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2) 
// console.log(parseInt(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(0.4 + 0.2) // 0.6 - 0.6000000000000001
// console.log((2 / 5) + (1 / 5)) - то же самое
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt

// console.log(typeof 99999999999999998)
// console.log(99999999999999998.12312312n) // error
// console.log(10n - 4) // error
// console.log(10n - 4)
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2n

// 3 Math

// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(43, 23, 12, 32, 4334, 1))
// console.log(Math.min(43, 23, 12, 32, 4334, 1))
// console.log(Math.floor(4.5)) // 4
// console.log(Math.ceil(4.5)) // округление в большую к ближайшему целому - 5
// console.log(Math.round(4.5)) // округление к ближайшему целому - 5
// console.log(Math.trunc(4.5)) // 4
// console.log(Math.random())

// 4 Example Math

// функция выводящая случайное число от 10 до 42

// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42))


