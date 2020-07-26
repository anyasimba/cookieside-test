const fs = require('fs');
const path = require('path');
const vm = require('vm');

function testQuery() { 
    return new Promise(resolve => {
        setTimeout(function() { resolve(100500); }, 2000); 
    });
}

module.exports = (scriptPath, callback) => {
    const sandbox = vm.createContext({
        testQuery,
        testResult: (result) => {
            callback(result);
        },
        callback,
    });
    vm.runInContext(fs.readFileSync(scriptPath), sandbox);
};