const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));


app.listen(PORT, console.log("Server started on " + PORT));