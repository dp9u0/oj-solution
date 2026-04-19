/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let targetCd = target.charCodeAt(0);
  let min = Infinity,
    nextLetter = '';
  for (let index = 0; index < letters.length; index++) {
    const letter = letters[index];
    let cd = letter.charCodeAt(0);
    let gt = cd - targetCd;
    let gt2 = cd - targetCd + 26;
    if (gt > 0) {
      if (gt < min) {
        nextLetter = letter;
        min = gt;
      }
    } else if (gt2 < min) {
      nextLetter = letter;
      min = gt2;
    }
    if (min === 1) {
      break;
    }
  }
  return nextLetter;
};