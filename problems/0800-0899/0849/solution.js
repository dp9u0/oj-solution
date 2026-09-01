/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let left = -1,
    max = 0,
    length = seats.length;
  for (let i = 0; i < length; i++) {
    if (seats[i] === 1) {
      max = Math.max(max, left !== -1 ? ~~((i - left) / 2) : i);
      left = i;
    }
  }
  // check last
  if (seats[length - 1] === 0) {
    max = Math.max(max, length - 1 - left);
  }
  return max;
};