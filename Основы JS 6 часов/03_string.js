// const name = 'Дима'
// const age = 26

// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'

// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет.`
// const output2 = `Привет, меня зовут ${name} и мой возраст ${age} лет.`
// console.log(output);
// console.log(output2);

// const output3 = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A' : 'B'} лет.`
// console.log(output3);

// const output = `
// <div>This is div</div>
// <p>this is p</p>
// `
// console.log(output);

// const name = 'Дима'
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(0));
// console.log(name.indexOf('ма'));
// console.log(name.indexOf('~'));
// console.log(name.startsWith('д')); // false так как имя с большой буквы
// console.log(name.startsWith('Д')); // true так как имя с большой буквы
// console.log(name.toLowerCase().startsWith('д')); // true так привели все буквы в строке (имени) к строчным
// console.log(name.endsWith('Д')); // присутствует ли в окончании строки символ
// console.log(name.repeat(3)); 

// const string = '     password        '

// console.log(string.trim()) // удаляет пробелы
// // // console.log(string.trimLeft()) - устарело?
// // // console.log(string.trimRight()) - устарело?
// console.log(string.trimStart())
// console.log(string.trimEnd())

function logPerson(s, name, age) {
    // console.log(s, name, age);
    if (age < 0) {
        age = 'Ещё не родился'
    }

    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Дмитрий'
const personAge = '32'

const personName2 = 'Николай'
const personAge2 = '-32'

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output);
console.log(output2);