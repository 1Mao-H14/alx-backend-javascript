const http = require('http');
const { readFile } = require('fs');

const serverHost = '127.0.0.1';
const serverPort = 1245;

function countStudents(filePath) {
  const studentGroups = {};
  const fieldCounts = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(filePath, (error, fileContent) => {
      if (error) {
        reject(error);
      } else {
        let output = '';
        const lines = fileContent.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            totalStudents += 1;
            const studentData = lines[i].toString().split(',');
            const studentName = studentData[0];
            const studentField = studentData[3];

            if (Object.prototype.hasOwnProperty.call(studentGroups, studentField)) {
              studentGroups[studentField].push(studentName);
            } else {
              studentGroups[studentField] = [studentName];
            }

            if (Object.prototype.hasOwnProperty.call(fieldCounts, studentField)) {
              fieldCounts[studentField] += 1;
            } else {
              fieldCounts[studentField] = 1;
            }
          }
        }

        const enrolledStudents = totalStudents - 1;
        output += `Number of students: ${enrolledStudents}\n`;

        for (const [field, count] of Object.entries(fieldCounts)) {
          if (field !== 'field') {
            output += `Number of students in ${field}: ${count}. `;
            output += `List: ${studentGroups[field].join(', ')}\n`;
          }
        }

        resolve(output);
      }
    });
  });
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outputString = output.slice(0, -1);
      res.end(outputString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

server.listen(serverPort, serverHost, () => {});

module.exports = server;
