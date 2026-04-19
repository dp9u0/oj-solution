/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let s = [...S],
    left = 0,
    right = s.length - 1;
  const charCodeA = 'A'.charCodeAt(0),
    charCodeZ = 'Z'.charCodeAt(0),
    charCodea = 'a'.charCodeAt(0),
    charCodez = 'z'.charCodeAt(0);
  while (left < right) {
    let charCodeOfLeft = s[left].charCodeAt(0);
    let charCodeRight = s[right].charCodeAt(0);
    if (!((charCodeA <= charCodeOfLeft && charCodeOfLeft <= charCodeZ) ||
        (charCodea <= charCodeOfLeft && charCodeOfLeft <= charCodez))) {
      left++;
    } else if (!((charCodeA <= charCodeRight && charCodeRight <= charCodeZ) ||
        (charCodea <= charCodeRight && charCodeRight <= charCodez))) {
      right--;
    } else {
      //swap 
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s.join('');
};

/**
// TEST:
console.log(reverseOnlyLetters('ab1c2d4e5fgh'));
*/