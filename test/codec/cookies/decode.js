

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.cookies.decode';
var cases = [];

var key = 'key';
var value = 'value';
var expires = 'Tue, 15-Jan-2013 21:47:38 GMT';
var maxAge = 10;
var domain = 'ietf.org';
var path = '/html/rfc6265';


var cookie = new codec.cookies.Cookie(key, value);
cookie.setExpires(expires);
cookie.setMaxAge(maxAge);
cookie.setDomain(domain);
cookie.setPath(path);
cookie.makeSecure();
cookie.makeHttpOnly();
var cookieString = key + '=' + value + '; ' +
    codec.cookies.AV.EXPIRES + '=' + expires + '; ' +
    codec.cookies.AV.MAX_AGE + '=' + maxAge + '; ' +
    codec.cookies.AV.DOMAIN + '=' + domain + '; ' +
    codec.cookies.AV.PATH + '=' + path + '; ' +
    codec.cookies.AV.SECURE + '; ' +
    codec.cookies.AV.HTTP_ONLY;


cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.cookies.decode(cookieString)),
    yaa.insert(cookie),
    '[codec.form.decode] ' +
    '(expires, max-age, domain, path, secure, httponly, extension)'
));



module.exports = runner(cases, testName);
