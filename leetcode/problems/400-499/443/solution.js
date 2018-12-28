/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!chars || !chars.length) {
    return 0;
  }
  let p = 0,
    curChar = chars[0],
    count = 1;
  for (let i = 1; i <= chars.length; i++) {
    let char = chars[i];
    if (char === curChar) {
      count++;
    } else {
      chars[p++] = curChar;
      if (count > 1) {
        let countChars = [...count.toString()];
        for (let j = 0; j < countChars.length; j++) {
          chars[p++] = countChars[j];
        }
      }
      curChar = char;
      count = 1;
    }
  }
  return p;
};

/**
// TEST: 
let chars = ["a", "a", "a", "b", "b", "a", "a"];

console.log(compress(chars));
console.log(chars);
*/