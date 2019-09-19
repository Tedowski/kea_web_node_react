const fs = require('fs');

const object = {
    message: "hi",
    name: "Jon"
}

const jsonObject = JSON.stringify(object, null, 2)

fs.writeFile("./data.json", jsonObject, err => err ? console.log(err) : console.log('Saved'))