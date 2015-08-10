

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.json.encode';
var cases = [];

var input = {
  'a': [3, 4],
  'b': {
    'e': 5,
    'y': {
      'a&j': 1
    }
  },
  'c': "123"
};
var output = '{"a":[3,4],"b":{"e":5,"y":{"a&j":1}},"c":"123"}';


cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.json.encode(input)),
    yaa.insert(output),
    '[codec.json.encode]'
));


module.exports = runner(cases, testName);
