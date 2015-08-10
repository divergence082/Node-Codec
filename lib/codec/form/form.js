

/**
 * @param {!Object} data
 * @return {string}
 */
codec.form.encode = function(data) {
  return querystring.stringify(data);
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
