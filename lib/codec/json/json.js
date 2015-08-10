

/**
 * @param {*} data
 * @return {string}
 */
codec.json.encode = function(data) {
  try {
    return JSON.stringify(data) || '';
  } catch (error) {
    console.warn('WARN: [codec.json.encode] ' +
        '"' + error.message + '" : "' + String(data) + '"');
  }

  return '';
};


/**
 * @param {string} string
 * @return {?Object}
 */
codec.json.decode = function(string) {
  try {
    if (string) {
      var parsedData = JSON.parse(string);
      if (parsedData instanceof Object) {
        return parsedData;
      }
    }

    console.warn('WARN: [codec.json.decode] ' +
        '"Data is not valid" : "' + string + '"');
  } catch (error) {
    console.warn('WARN: [codec.json.decode] ' +
        '"' + String(error.message) + '" : "' + string + '"');
  }

  return null;
};
