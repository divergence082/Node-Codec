

var yaa = require('yaa');


var tests = [
  require('./base64/base64.js'),
  require('./json/json.js'),
  require('./cookies/cookies.js'),
  require('./form/form.js')
];


/**
 * @param {number} code
 */
function complete(code) {
  process.exit(code);
}

yaa.sequence(tests).call(null, complete, complete);
