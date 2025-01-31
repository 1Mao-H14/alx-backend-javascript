const express = require('express');
const { readFile } = require('fs');

const appServer = express();
const listeningPort = 1245;

function getStudentDetails(filePath) {
  const studentByField = {};
  const fieldStudentCount = {};
  let totalStudentCount = 0;

  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let result = '';
        const fileLines = data.toString().split('\n');

        for (let i = 0; i < fileLines.length; i += 1) {
          if (fileLines[i]) {
            totalStudentCount += 1;
            const studentInfo = fileLines[i].split(',');
            const studentName = studentInfo[0];
            const studentMajor = studentInfo[3];

            if (Object.prototype.hasOwnProperty.call(studentByField, studentMajor)) {
              studentByField[studentMajor].push(studentName);
            } else {
              studentByField[studentMajor] = [studentName];
            }

            if (Object.prototype.hasOwnProperty.call(fieldStudentCount, studentMajor)) {
              fieldStudentCount[studentMajor] += 1;
            } else {
              fieldStudentCount[studentMajor] = 1;
            }
          }
        }

        const totalStudents = totalStudentCount - 1;  // Exclude header
        result += `Total number of students: ${totalStudents}\n`;

        for (const [major, count] of Object.entries(fieldStudentCount)) {
          if (major !== 'field') {
            result += `Number of students in ${major}: ${count}. `;
            result += `List: ${studentByField[major].join(', ')}\n`;
          }
        }

        resolve(result);
      }
    });
  });
}

appServer.get('/', (req, res) => {
  res.send('Welcome to Holberton School!');
});

appServer.get('/students', (req, res) => {
  getStudentDetails(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students:', output].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nUnable to load the database');
  });
});

appServer.listen(listeningPort, () => {});

module.exports = appServer;
