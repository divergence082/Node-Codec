

/**
 * @param {!codec.cookies.Cookie} cookie
 * @return {string}
 */
codec.cookies.encode = function(cookie) {
  return cookie.toString();
};


/**
 * @param {string} string
 * @return {?codec.cookies.Cookie}
 */
codec.cookies.decode = function(string) {
  var pairs = string.toLowerCase().trim().split(';');
  var cookie = codec.cookies.__decodeCookie(pairs);

  if (cookie) {
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].trim().split('=');
      var pairLength = pair.length;

      if (pairLength > 0) {
        var key = pair[0].trim();

        if (pairLength === 1) {
          if (key === codec.cookies.AV.SECURE) {
            cookie.makeSecure();
          } else if (key === codec.cookies.AV.HTTP_ONLY) {
            cookie.makeHttpOnly();
          } else {
            cookie.setExtension(key);
          }
        } else if (pairLength === 2) {
          var value = pair[1].trim();

          if (key === codec.cookies.AV.EXPIRES) {
            cookie.setExpires(value);
          } else if (key === codec.cookies.AV.MAX_AGE) {
            cookie.setMaxAge(Number(value));
          } else if (key === codec.cookies.AV.DOMAIN) {
            cookie.setDomain(value);
          } else if (key === codec.cookies.AV.PATH) {
            cookie.setPath(value);
          }
        }
      }
    }
  } else {
    return cookie;
  }
};


/**
 * @type {!Array.<string>}
 */
codec.cookies.__AV_KEYS = [
  codec.cookies.AV.EXPIRES,
  codec.cookies.AV.MAX_AGE,
  codec.cookies.AV.DOMAIN,
  codec.cookies.AV.PATH
];


/**
 * @param {!Array.<string>} cookiePairs
 * @return {?codec.cookies.Cookie}
 */
codec.cookies.__decodeCookie = function(cookiePairs) {
  for (var i = 0; i < cookiePairs.length; i++) {
    var pair = cookiePairs[i].trim().split('=');

    if (pair.length === 2) {
      var key = pair[0].trim();
      var value = pair[1].trim();

      if (codec.cookies.__AV_KEYS.indexOf(key) === -1) {
        return new codec.cookies.Cookie(key, value);
      }
    }
  }

  return null;
};
