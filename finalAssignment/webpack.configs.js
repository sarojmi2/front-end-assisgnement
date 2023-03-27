const path = require('path');

module.exports = {
    entry : './resources/script/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
};