const express = require('express');
const path = require('path')
const app = express();

const port = 3000

app.use(express.static('./../client'))

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/../client/index.html')
})

app.listen(port, (err) => err ? conole.log(err) : console.log('App listening on port: ', port))