const fruits = ["apple", "banana", "tomato", "ananas", "mango", "dragon fruit"]

// fruits.forEach((fruit) => {
//  console.log(fruit)
// })

// fruits.forEach((fruit, index, array) => {
//     console.log(fruit, index, array)
// })

// const fruitArray = fruits.map(fruit => {
//     if (fruit === "tomato") {
//         return fruit + ' does not go into a fruit salad'
//     }
//     return fruit + ' is a fruit'
// })

// console.log(fruitArray);

const fruitsWithoutN = fruits.filter(fruit => !fruit.includes('n'))

console.log(fruitsWithoutN);