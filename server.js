const express = require('express');
const path = require('path');
const cheerio = require('cheerio');
const generatePassword = require('password-generator');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/passwords', (req, res) => {
    const count = 5;

    const passwords = Array.from(Array(count).keys()).map(i =>
        generatePassword(12, false))
        res.json(passwords);
        console.log(`Sent ${count} passwords`);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server started on port" + PORT));