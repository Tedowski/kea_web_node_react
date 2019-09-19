const express = require('express');
const path = require('path');
const app = express();

app.get("/exercise/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3001, function(error) {
    if (error) {
        console.log('Error running your server', error);
    }
    console.log('Server running at port 3001')
});