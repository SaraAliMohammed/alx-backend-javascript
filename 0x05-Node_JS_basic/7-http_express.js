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
  res.write('This is the list of our students\n');
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      throw Error('Cannot load the database');
    }
    const results = [];
    data.trim().split('\n').forEach((data) => {
      results.push(data.split(','));
    });
    results.shift();
    const newData = [];
    results.forEach((data) => newData.push([data[0], data[3]]));
    const fields = new Set();
    newData.forEach((item) => fields.add(item[1]));
    const finalData = {};
    fields.forEach((data) => { (finalData[data] = 0); });
    newData.forEach((data) => { (finalData[data[1]] += 1); });
    res.write(`Number of students: ${results.filter((check) => check.length > 3).length}\n`);
    Object.keys(finalData).forEach((data) => res.write(`Number of students in ${data}: ${finalData[data]}. List: ${newData.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    res.end();
  });
});

app.listen(1245);

module.exports = app;
