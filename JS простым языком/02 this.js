// function hello() {
//     console.log('Hello', this)
// }

// const person = {
//     name: 'Vladilen',
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//         // console.log(`Name is ${person.name}`)
//     }
// }

// const lena = {
//     name: 'Elena',
//     age: 23
// }

// person.logInfo.bind(lena, 'Front', '8-999-000-66-55') ()
// person.logInfo.call(lena, 'Front', '8-999-000-66-55')
// person.logInfo.apply(lena, ['Front', '8-999-000-66-55'])



// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Front', '8-999-000-66-55')
// person.logInfo.bind(lena)()

/// ==================


const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

// array.multBy(2)

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.myltBy(20))