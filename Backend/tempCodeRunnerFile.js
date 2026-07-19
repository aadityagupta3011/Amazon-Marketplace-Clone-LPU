const os = require('os');
//print info in console
function getSystemInfo() {
  const osType = os.type();
  const osPlatform = os.platform();
  const osRelease = os.release();
  const cpuCores = os.cpus().length;
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const uptime = os.uptime();

  // Return an object with the system information
  return {
    osType,
    osPlatform,
    osRelease,
    cpuCores,
    totalMemory,
    freeMemory,
    uptime,
  };
}

// Call the function to get the info object
const systemInfo = getSystemInfo();
// Print the object to the console
console.log(systemInfo);

module.exports = getSystemInfo;


// fs.readFile(students.json, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   } 

//   let students = JSON.parse(data)
//   students.push(student)

//     fs.writeFile(students.json, JSON.stringify(students, null, 2), (err) => {
//         if (err) {
//             console.error('Error writing to the file:', err)
//             return;
//         }
//         console.log('Student added successfully!')
//     }
//     )
// })