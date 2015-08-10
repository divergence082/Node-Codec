

/**
 * @param {string} urlString
 * @return {!url.URL}
 */
codec.url.decode = function(urlString) {
  var slashesDenoteHost = urlString.length > 2 && urlString.slice(0, 2) == '//';
  return url.parse(urlString, true, slashesDenoteHost);
};
