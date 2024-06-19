const fs = require('fs');

async function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      fs.readFile(path, 'utf8', (err, data) => {
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
        console.log(`Number of students: ${results.filter((check) => check.length > 3).length}`);
        Object.keys(finalData).forEach((data) => console.log(`Number of students in ${data}: ${finalData[data]}. List: ${newData.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
        resolve(results, finalData, newData);
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
