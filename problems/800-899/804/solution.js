/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let morseTable = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  let set = new Set();
  let charCodeOfa = 'a'.charCodeAt(0);
  let diffCount = 0;
  words.forEach(word => {
    let morse = '';
    for (let i = 0; i < word.length; i++) {
      let charCode = word.charCodeAt(i);
      morse += morseTable[charCode - charCodeOfa];
    }
    if (!set.has(morse)) {
      diffCount++;
      set.add(morse);
    }
  });
  return diffCount;
};