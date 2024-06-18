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
    const new_data = [];
    results.forEach((data) => new_data.push([data[0], data[3]]));
    const fields = new Set();
    new_data.forEach((item) => fields.add(item[1]));
    const final_data = {};
    fields.forEach((data) => { (final_data[data] = 0); });
    new_data.forEach((data) => { (final_data[data[1]] += 1); });
    res.write(`Number of students: ${results.filter((check) => check.length > 3).length}\n`);
    Object.keys(final_data).forEach((data) => res.write(`Number of students in ${data}: ${final_data[data]}. List: ${new_data.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    res.end();
  });
});

app.listen(1245);

module.exports = app;
