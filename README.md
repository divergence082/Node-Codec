# Node-Codec

Codec for strings

Encodes and decodes strings into different formats.

#### Available formats:
- [json](#json)
- [forms](#forms)
- [base64](#base64)
- [cookies](#cookies)

### <a name="json"></a>JSON

```javascript
var codec = require('codec');
var jsonObject = {
  'a': [3, 4],
  'b': {
    'e': 5,
    'y': {
      'a&j': 1
    }
  },
  'c': "123"'{"a":[3,4],"b":{"e":5,"y":{"a&j":1}},"c":"123"}'
};
var jsonString = '{"a":[3,4],"b":{"e":5,"y":{"a&j":1}},"c":"123"}';

// safe encode object into json string
codec.json.encode(jsonObject);  // >> jsonString

// safe decode json string to object
codec.json.decode(jsonString);  // >> jsonObject 

```

### <a name="forms"></a>Forms

```javascript
var codec = require('codec');
var formObject = {
  'a': [3, 4],
  'b': {
    'e': 5,
    'y': {
      'a&j': 1
    }
  },
  'c': [1, 2, 3]
};
var formString = 'a=%5B3%2C4%5D&b=%7B%22e%22%3A5%2C%22y%22%3A%7B%22a%26j%22%3A1%7D%7D&c=%5B1%2C2%2C3%5D';

// encode object into form string
codec.form.encode(formObject);  // >> formString

// decode form string to object
codec.form.decode(formString);  // >> formObject

```

### <a name="base64"></a>Base64

```javascript
var codec = require('codec');
var string = '123';
var base64String = 'MTIz';

// safe encode string into base64 string
codec.base64.encode(string);  // base64String 

// safe decode base64 string to string
codec.base64.decode(base64String);  // string

```

### <a name="cookies"></a>Cookies

```javascript
var codec = require('codec');
var cookie = new codec.cookies.Cookie('key', 'value');
var cookieString = 'key=value';

// encode cookie object into cookie string
codec.cookies.encode(cookie);  // cookieString 

// decode cookie string to cookie object
codec.cookies.decode(cookieString);  // cookie

```
