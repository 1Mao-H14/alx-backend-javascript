const { readFile } = require('fs');

function countStudents(filePath) {
  const studentRecords = {};
  const fieldStudentCounts = {};
  let studentTotal = 0;

  return new Promise((resolve, reject) => {
    readFile(filePath, (error, fileContent) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = fileContent.toString().split('\n');

        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            studentTotal += 1;
            const studentInfo = lines[i].split(',');
            const studentName = studentInfo[0];
            const studentField = studentInfo[3];

            if (Object.prototype.hasOwnProperty.call(studentRecords, studentField)) {
              studentRecords[studentField].push(studentName);
            } else {
              studentRecords[studentField] = [studentName];
            }

            fieldStudentCounts[studentField] = (fieldStudentCounts[studentField] || 0) + 1;
          }
        }

        const totalEnrolled = studentTotal - 1;
        console.log(`Number of students: ${totalEnrolled}`);

        for (const [field, count] of Object.entries(fieldStudentCounts)) {
          if (field !== 'field') {
            console.log(`Number of students in ${field}: ${count}. List: ${studentRecords[field].join(', ')}`);
          }
        }

        resolve(fileContent);
      }
    });
  });
}

module.exports = countStudents;
