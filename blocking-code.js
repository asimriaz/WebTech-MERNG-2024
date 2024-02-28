const fs = require('fs');

var data = fs.readFileSync('README.md', 'utf-8');
console.log(data);
console.log('Done');