

/**
 * @param {!Object} data
 * @return {string}
 */
codec.form.encode = function(data) {
  var result = {};
  var keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = data[key];

    if (typeof value === 'object') {
      result[key] = codec.json.encode(value);
    } else {
      result[key] = value;
    }
  }

  return querystring.stringify(result);
};


/**
 * @param {string} string
 * @return {?Object}
 */
codec.form.decode = function(string) {
  var result = {};
  var decodedQuery = querystring.parse(string);
  var keys = Object.keys(decodedQuery);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = decodedQuery[key];

    result[key] = typeof value === 'string' ?
        codec.json.decode(value) || value : value;
  }

  return result;
};
