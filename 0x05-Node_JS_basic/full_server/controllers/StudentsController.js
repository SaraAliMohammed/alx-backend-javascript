const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents (request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const results = [];
      results.push('This is the list of our students');
      const fields = Object.keys(students);
      fields.sort();
      for (let i = 0; i < fields.length; i += 1) {
        results.push(`Number of students in ${fields[i]}: ${students[fields[i]].length}. List: ${students[fields[i]].join(', ')}`);
      }
      response.status(200).send(results.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor (request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
