/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  let result = 0;
  let middle = ~~((right - left) / 2) + left; // Do NOT use (maxNumber+minNumber)/2 in case of over flow
  while ((result = guess(middle)) !== 0) {
    if (result === 1) { left = middle + 1 }
    else { right = middle - 1; }
    middle = ~~((right - left) / 2) + left;
  }
  return middle;
}

// TEST:
guess = (n) => n === 6 ? 0 : n < 6 ? 1 : -1
console.log(guessNumber(10))