

/**
 * @param {string} string Строка.
 * @return {string} Закодированная строка.
 */
codec.base64.encode = function(string) {
  return (new Buffer(string)).toString(codec.base64.__ENCODING);
};


/**
 * @param {string} string
 * @return {string}
 */
codec.base64.decode = function(string) {
  return (new Buffer(string, codec.base64.__ENCODING)).toString();
};


/**
 * @type {string}
 */
codec.base64.__ENCODING = 'base64';
