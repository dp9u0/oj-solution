/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  var sortedNums = [...nums].sort((a, b) => b - a);
  var map = {};
  sortedNums.forEach((num, index) => {
    map[num] = index + 1;
  });
  return nums.map((num, index) => {
    if (map[num] === 1) return "Gold Medal";
    else if (map[num] === 2) return "Silver Medal";
    else if (map[num] === 3) return "Bronze Medal";
    else return (map[num] + '');
  });
};