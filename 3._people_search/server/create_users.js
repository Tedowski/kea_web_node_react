const faker = require('faker');
const fs = require('fs');
const {performance} = require('perf_hooks');

class Person {
    constructor(firstName, lastName, avatar, address) {
        this.firstName = firstName
        this.lastName = lastName
        this.avatar = avatar
        this.address = address
    }
    sayName() {
        return this.firstName
    }
}

const numberOfPeople = 100000

const people = {people: []}

const timeStart = performance.now();

for (let i = 1; i <= numberOfPeople; i++) {
    const person = new Person(faker.name.firstName(), faker.name.lastName(), faker.image.avatar(), {
        city: faker.address.city(),
        streetName: faker.address.streetName()
    })
    people.people.push(person)
}

const jsonObject = JSON.stringify(people, null, 2)

fs.writeFile("./people.json", jsonObject, err => err ? console.log(err) : console.log('Saved'))

const timeEnd = performance.now();

const timeDiff = (timeEnd - timeStart)/1000

console.log('It took ' + timeDiff + ' seconds to finish');

// const hasName = (array, ) => { 
//     people.filter((person) => {
//         return person.name = "Chasity"
//     })
// }

// console.log(hasName)

// const person = new Person(faker.name.firstName(), faker.name.lastName(), faker.image.avatar(), {
//     city: faker.address.city(),
//     streetName: faker.address.streetName()
// })

// console.log(person);