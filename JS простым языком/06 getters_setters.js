// Object.create. Что такое getters, setters

const person = Object.create (
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    }, 
    {
        name: {
            value: 'Vladilen', 
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1993,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                // return 'Hello!'
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red'
                console.log('Set age', value)
            } 
        }
    }
)

// const person = {
//     name: 'Vladilen',
//     birthyear: 1993
// }

// person.name = 'Maxim'

// for (let key in person) {
//     console.log ('Key', key, person[key])
// }

for (let key in person) {
        if (person.hasOwnProperty(key)) {
            console.log ('Key', key, person[key])
        }
    }
