const fs = require('fs');

function countStudents(path) {
  try {
    const file_data = fs.readFileSync(path, 'utf8').trim();
    const results = [];
    file_data.split('\n').forEach((data) => {
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
    console.log(`Number of students: ${results.filter((check) => check.length > 3).length}`);
    Object.keys(final_data).forEach((data) => console.log(`Number of students in ${data}: ${final_data[data]}. List: ${new_data.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
