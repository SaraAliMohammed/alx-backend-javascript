const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');

  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    const results = data.trim().split('\n').map((line) => line.split(','));
    results.shift(); // Remove the header row

    const newData = results.map((row) => [row[0], row[3]]);
    const fields = new Set(newData.map((item) => item[1]));

    const finalData = {};
    fields.forEach((field) => { finalData[field] = 0; });
    newData.forEach((item) => { finalData[item[1]] += 1; });

    let responseText = 'This is the list of our students\n';
    responseText += `Number of students: ${results.filter((row) => row.length > 3).length}\n`;
    Object.keys(finalData).forEach((field) => {
      responseText += `Number of students in ${field}: ${finalData[field]}. List: ${newData.filter((item) => item[1] === field).map((item) => item[0]).join(', ')}\n`;
    });

    res.send(responseText.trimEnd()); // Trim the trailing new line
  });
});

app.listen(1245);

module.exports = app;
