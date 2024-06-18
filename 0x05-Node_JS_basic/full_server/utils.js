const { readFile } = require('fs');

module.exports = function readDatabase (filePath) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const lines_noHeader = lines.slice(1);
        for (let i = 0; i < lines_noHeader.length; i += 1) {
          if (lines_noHeader[i]) {
            const field = lines_noHeader[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
};
