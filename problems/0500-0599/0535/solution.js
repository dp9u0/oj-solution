/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  unique++;
  original[unique] = longUrl;
  shortened[longUrl] = unique;
  return shortened[longUrl];
};

/**
* Decodes a shortened URL to its original URL.
*
* @param {string} shortUrl
* @return {string}
*/
var decode = function(shortUrl) {
  return original[unique];
};

let original ={}
let shortened={}
let unique = 0;

/**
* Your functions will be called as such:
* decode(encode(url));
*/