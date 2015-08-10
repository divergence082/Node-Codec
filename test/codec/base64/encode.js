

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.base64.encode';
var cases = [];

var input = '123';
var output = 'MTIz';


cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.base64.encode(input)),
    yaa.insert(output),
    '[codec.base64.encode]'
));


module.exports = runner(cases, testName);
