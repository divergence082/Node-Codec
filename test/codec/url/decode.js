

var yaa = require('yaa');
var codec = require('../../../bin/index.js');
var runner = require('../../runner.js');
var testName = 'codec.url.decode';
var cases = [];

var urlObject1 = {
  'protocol': 'http:',
  'slashes': true,
  'auth': null,
  'host': 'host.name:8080',
  'port': '8080',
  'hostname': 'host.name',
  'hash': null,
  'search': '?key=value',
  'query': {
    'key': 'value'
  },
  'pathname': '/path',
  'path': '/path?key=value',
  'href': 'http://host.name:8080/path?key=value'
};

var urlObject2 = {
  'protocol': null,
  'slashes': true,
  'auth': null,
  'host': 'host.name:8080',
  'port': '8080',
  'hostname': 'host.name',
  'hash': null,
  'search': '?key=value',
  'query': {
    'key': 'value'
  },
  'pathname': '/path',
  'path': '/path?key=value',
  'href': '//host.name:8080/path?key=value'
};


cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.url.decode(urlObject1['href'])),
    yaa.insert(urlObject1),
    '[codec.json.decode] with protocol'
));


cases.push(yaa.assert.outputDeepEquals(
    yaa.insert(codec.url.decode(urlObject2['href'])),
    yaa.insert(urlObject2),
    '[codec.json.decode] without protocol'
));


module.exports = runner(cases, testName);
