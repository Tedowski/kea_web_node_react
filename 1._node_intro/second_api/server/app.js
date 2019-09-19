const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
// const fs = require('fs');

const app = express()

const me = {
    firstName: 'Jon',
    lastName: 'Doe'
}

app.use(express.static('./../public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html')
});

app.get('/about', (req, res) => {
    res.send({
        firstName: req.query.firstName,
        lastName: req.query.lastName
    })
    // no code bellow res.send - treat it as a return statement
})

app.post('/me', (req, res) => {
    me.firstName = req.body.firstName
    me.lastName = req.body.lastName

    res.send(me);
})

const server = app.listen(3000, () => {
    console.log('App listening on port ', server.address().port)
})