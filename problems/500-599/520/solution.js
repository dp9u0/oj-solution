/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let aCharCode = 'a'.charCodeAt(0);
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (aCharCode > word.charCodeAt(i)) {
      count++;
    }
  }
  return count === 0 || count === word.length || (count === 1 && aCharCode > word.charCodeAt(0));
};

/**
// TEST:
console.log(detectCapitalUse("FlaG"))
*/