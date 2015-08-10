

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.form.decode';
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
    yaa.insert(codec.form.decode(output)),
    yaa.insert(input),
    '[codec.form.decode]'
));


module.exports = runner(cases, testName);
