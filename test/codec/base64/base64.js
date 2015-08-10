

var yaa = require('yaa');


module.exports = yaa.sequence([
    require('./encode.js'),
    require('./decode.js')
]);
