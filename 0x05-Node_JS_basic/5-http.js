const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8').trim();
    const results = [];
    data.split('\n').forEach((data) => {
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
    stream.write(`Number of students: ${results.length}\n`);
    const temp = [];
    Object.keys(final_data).forEach((data) => temp.push(`Number of students in ${data}: ${final_data[data]}. List: ${new_data.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < temp.length; i++) {
      if (i === temp.length - 1) {
        temp[i] = temp[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      stream.write(temp[i]);
    }
  } else { throw new Error('Cannot load the database'); }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
