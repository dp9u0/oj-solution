/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }
  let rest = n;
  let lentgh = flowerbed.length;
  flowerbed[-1] = 0;
  flowerbed[lentgh] = 0
  for (let index = 0; index < lentgh; index++) {
    if ((flowerbed[index] | flowerbed[index - 1] | flowerbed[index + 1]) === 0) {
      flowerbed[index] = 1;
      rest--;
    }
    if (rest === 0) {
      return true;
    }
  }
  return false;
};