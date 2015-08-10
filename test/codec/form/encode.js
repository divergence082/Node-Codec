

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.form.encode';
var cases = [];

var input = {
  'a': [3, 4],
  'b': {
    'e': 5,
    'y': {
      'a&j': 1
    }
  },
  'c': [1, 2, 3]
};
var output = '' +
    'a=' + encodeURIComponent('[3,4]') + '&' +
    'b=' + encodeURIComponent('{\"e\":5,\"y\":{\"a&j\":1}}') + '&' +
    'c=' + encodeURIComponent('[1,2,3]');


cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.form.encode(input)),
    yaa.insert(output),
    '[codec.form.encode]'
));


module.exports = runner(cases, testName);
