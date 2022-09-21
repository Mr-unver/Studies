const person = {
    name: 'Dima',
    age: 32,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key':'Comlex Value',
    // // [Date.now]: '',
    // ['key_' + (1 + 3)]: 'Computed Key', // key 4
    greet: function() {
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени: ', this.name)
    }

    // this - это сам объект
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person)
// person.greet()

// person.age++
// console.log(person)
// person.languages.push('by')
// console.log(person)
// person['key_4'] = undefined - лучше по другому
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])
// delete person.languages[0] - languages: (3) [пусто, 'en', 'de']

// const name = person.name
// const age = person.age
// const languages = person.languages

// строки снизу заменяет строки вверху

// const {name, age, languages} = person 

// const {name, age: drugaya_peremennaya = 10, languages} = person  - 10_значение по умолчанию

// console.log(name, drugaya_peremennaya, languages)


// метод опасен, так как заходит в прототип функции, нужна проверка
// for (let key in person) {
//     console.log(key)
//     console.log('value', person[key])
// }

// надо так

// for (let key in person) {
//     if (person.hasOwnProperty(key)){
//     console.log(key)
//     console.log('value', person[key])
//     }
// }

// Object.keys(person).forEach( (key) => {
//     console.log(key)
//     console.log('value', person[key])
// })



// Context

// person.info()

const logger = {
    keys() {
        console.log('Objest Keys:', Object.keys(this))
    }, 

    keysAndValues() {
        // // "key": value
        // Object.keys(this).forEach( key => {
        //     console.log(`"${key}": ${this[key]}`)            
        // })
        // const self = this
        Object.keys(this).forEach(function(key) {
                console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
    withParams(top=false, between = false, bottom = false) {
        if (top) {
            console.log('---------- Start ----------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------------')
            }
    })

    if (bottom) {
        console.log('---------- End ----------')
    }
    
}
}
// logger.keys(person)

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])