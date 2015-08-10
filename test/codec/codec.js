

console.info('[TEST] IN PROGRESS');
var yaa = require('yaa');


var tests = [
  require('./base64/base64.js'),
  require('./json/json.js'),
  require('./cookies/cookies.js'),
  require('./form/form.js'),
  require('./url/url.js')
];


/**
 * @param {number} code
 */
function complete(code) {
  var message = code === 0 ? 'SUCCEEDED' : 'FAILED';
  console.info('[TEST] ' + message);
  process.exit(code);
}


yaa.sequence(tests).call(null, complete, complete);
