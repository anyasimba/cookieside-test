const path = require('path');

const vm = require('../src/index');
vm(path.join(__dirname, 'test.js'), (result) => {
    console.log(result);
});