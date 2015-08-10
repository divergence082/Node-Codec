

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
  var cookie = codec.cookies.__decodeCookie(string);

  if (cookie instanceof codec.cookies.Cookie) {
    cookie.setExpires(
        codec.cookies.__decodeAVValue(string, codec.cookies.AV.EXPIRES));
    cookie.setMaxAge(Number(
        codec.cookies.__decodeAVValue(string, codec.cookies.AV.MAX_AGE)));
    cookie.setDomain(
        codec.cookies.__decodeAVValue(string, codec.cookies.AV.DOMAIN));
    cookie.setPath(
        codec.cookies.__decodeAVValue(string, codec.cookies.AV.PATH));

    if (codec.cookies.__hasAVKey(string, codec.cookies.AV.SECURE)) {
      cookie.makeSecure();
    }

    if (codec.cookies.__hasAVKey(string, codec.cookies.AV.HTTP_ONLY)) {
      cookie.makeHttpOnly();
    }

    return cookie;
  } else {
    return null;
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
 * @param {string} cookieString
 * @return {?codec.cookies.Cookie}
 */
codec.cookies.__decodeCookie = function(cookieString) {
  var cookiePairs = cookieString.trim().split(';');
  for (var i = 0; i < cookiePairs.length; i++) {
    var pair = cookiePairs[i].trim().split('=');

    if (pair.length === 2) {
      var key = pair[0].trim();
      var value = pair[1].trim();

      if (codec.cookies.__AV_KEYS.indexOf(key.toLowerCase()) === -1) {
        return new codec.cookies.Cookie(key, value);
      }
    }
  }

  return null;
};


/**
 * @param {string} cookieString
 * @param {string} av
 * @return {string}
 */
codec.cookies.__decodeAVValue = function(cookieString, av) {
  var start = cookieString.toLowerCase().indexOf(av);

  if (start !== -1) {
    var stop = cookieString.indexOf(';', start);
    var end = stop === -1 ? cookieString.length : stop;
    var avPair = cookieString.slice(start, end).trim().split('=');

    return avPair[1] || '';
  } else {
    return '';
  }
};


/**
 * @param {string} cookieString
 * @param {string} av
 * @return {boolean}
 */
codec.cookies.__hasAVKey = function(cookieString, av) {
  return cookieString.toLowerCase().indexOf(av) !== -1;
};
