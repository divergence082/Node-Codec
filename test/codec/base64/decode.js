

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.base64.decode';
var cases = [];

var input = '123';
var output = 'MTIz';


cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.base64.decode(output)),
    yaa.insert(input),
    '[codec.base64.decode]'
));


module.exports = runner(cases, testName);
