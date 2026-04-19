/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = {},
    maxCount = 0,
    minLength = Infinity;
  nums.forEach((num, index) => {
    map[num] = {
      first: map[num] ? map[num].first : index,
      last: index,
      count: map[num] ? map[num].count + 1 : 1
    }
    map[num].length = map[num].last - map[num].first + 1;
    if ((map[num].count > maxCount) || (map[num].count === maxCount && map[num].length < minLength)) {
      maxCount = map[num].count;
      minLength = map[num].length;
    }
  });
  return minLength;
};