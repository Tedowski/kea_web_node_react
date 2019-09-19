const variable = require('./exporting_variables');
const Bob = require('./Bobstruction');
const myFunc = require('./functions')

const bob = new Bob(2, 5)

// function saySentence(message) {
//     console.log(message);
// }

// saySentence(myFunc())

const giveName = () => {
    return 'Charlene'
}

console.log(giveName())