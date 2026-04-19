/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let map = {};
  let count = 0;
  nums.forEach(num => {
    map[num] = (map[num] || 0) + 1;
    if (map[num + 1] && map[num] + map[num + 1] > count) {
      count = map[num] + map[num + 1];
    }
    if (map[num - 1] && map[num] + map[num - 1] > count) {
      count = map[num] + map[num - 1];
    }
  });
  return count;
};