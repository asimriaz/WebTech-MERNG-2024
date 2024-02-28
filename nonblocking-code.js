const fs = require('fs');

fs.readFile('README.md', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('Done');