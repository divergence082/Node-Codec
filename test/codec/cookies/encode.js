

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.cookies.encode';
var cases = [];

var key = 'key';
var value = 'value';
var input = new codec.cookies.Cookie(key, value);
var output = key + '=' + value;
cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.encode(input)),
    yaa.insert(key + '=' + value),
    '[codec.form.encode]'
));


var expires = 'Tue, 15-Jan-2013 21:47:38 GMT';
input.setExpires(expires);
output += ('; ' + codec.cookies.AV.EXPIRES + '=' + expires);
cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.encode(input)),
    yaa.insert(output),
    '[codec.form.encode] (expires)'
));


var maxAge = 10;
input.setMaxAge(maxAge);
output += ('; ' + codec.cookies.AV.MAX_AGE + '=' + maxAge);
cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.encode(input)),
    yaa.insert(output),
    '[codec.form.encode] (expires, max-age)'
));


var domain = 'ietf.org';
input.setDomain(domain);
output += ('; ' + codec.cookies.AV.DOMAIN + '=' + domain);
cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.encode(input)),
    yaa.insert(output),
    '[codec.form.encode] (expires, max-age, domain)'
));


var path = '/html/rfc6265';
input.setPath(path);
output += ('; ' + codec.cookies.AV.PATH + '=' + path);
cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.encode(input)),
    yaa.insert(output),
    '[codec.form.encode] (expires, max-age, domain, path)'
));


input.makeSecure();
output += ('; ' + codec.cookies.AV.SECURE);
cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.encode(input)),
    yaa.insert(output),
    '[codec.form.encode] (expires, max-age, domain, path, secure)'
));


input.makeHttpOnly();
output += ('; ' + codec.cookies.AV.HTTP_ONLY);
cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.encode(input)),
    yaa.insert(output),
    '[codec.form.encode] (expires, max-age, domain, path, secure, httponly)'
));


module.exports = runner(cases, testName);
