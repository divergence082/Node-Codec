


/**
 * @param {string} key
 * @param {string} value
 * @constructor
 */
codec.cookies.Cookie = function(key, value) {

  /**
   * @type {string}
   */
  this.__key = key;

  /**
   * @type {string}
   */
  this.__value = value;

  /**
   * @type {string}
   */
  this.__expires = '';

  /**
   * @type {number}
   */
  this.__maxAge = 0;

  /**
   * @type {string}
   */
  this.__domain = '';

  /**
   * @type {string}
   */
  this.__path = '';

  /**
   * @type {boolean}
   */
  this.__secure = false;

  /**
   * @type {boolean}
   */
  this.__httpOnly = false;

};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getKey = function() {
  return this.__key;
};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getValue = function() {
  return this.__value;
};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getExpires = function() {
  return this.__expires;
};


/**
 * @param {string} expires
 */
codec.cookies.Cookie.prototype.setExpires = function(expires) {
  this.__expires = expires;
};


/**
 * @return {number}
 */
codec.cookies.Cookie.prototype.getMaxAge = function() {
  return this.__maxAge;
};


/**
 * @param {number} maxAge
 */
codec.cookies.Cookie.prototype.setMaxAge = function(maxAge) {
  this.__maxAge = maxAge;
};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getDomain = function() {
  return this.__domain;
};


/**
 * @param {string} domain
 */
codec.cookies.Cookie.prototype.setDomain = function(domain) {
  this.__domain = domain;
};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getPath = function() {
  return this.__path;
};


/**
 * @param {string} path
 */
codec.cookies.Cookie.prototype.setPath = function(path) {
  this.__path = path;
};


/**
 *
 */
codec.cookies.Cookie.prototype.makeSecure = function() {
  this.__secure = true;
};


/**
 *
 */
codec.cookies.Cookie.prototype.makeHttpOnly = function() {
  this.__httpOnly = true;
};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.toString = function() {
  var av = [this.__key + '=' + this.__value];

  if (this.__expires) {
    av.push(codec.cookies.AV.EXPIRES + '=' + this.__expires);
  }

  if (this.__maxAge) {
    av.push(codec.cookies.AV.MAX_AGE + '=' + this.__maxAge);
  }

  if (this.__domain) {
    av.push(codec.cookies.AV.DOMAIN + '=' + this.__domain);
  }

  if (this.__path) {
    av.push(codec.cookies.AV.PATH + '=' + this.__path);
  }

  if (this.__secure) {
    av.push(codec.cookies.AV.SECURE);
  }

  if (this.__httpOnly) {
    av.push(codec.cookies.AV.HTTP_ONLY);
  }

  return av.join('; ');
};
