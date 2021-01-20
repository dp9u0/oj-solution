const charCodeA = 'a'.charCodeAt(0);

/**
 * @param {string} word
 * @return {number[]}
 */
const getCharSet = (word) => {
  const results = new Array(26).fill(0);
  for (let i = 0; i < word.length; i++) {
    results[word.charCodeAt(i) - charCodeA]++;
  }
  return results;
}

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let length = 0;
  let charSet = getCharSet(chars);
  words.forEach(word => {
    if (word.length > chars.length) return;
    const set = getCharSet(word);
    for (let i = 0; i < 26; i++) {
      if (charSet[i] < set[i]) return;
    }
    length += word.length
  });
  return length;
};


// TEST:
let words = ["cat", "bt", "hat", "tree"], chars = "atach";
console.log(countCharacters(words, chars))
words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"
console.log(countCharacters(words, chars))


