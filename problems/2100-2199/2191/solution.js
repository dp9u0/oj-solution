/*
 * @lc app=leetcode id=2191 lang=javascript
 *
 * [2191] Sort the Jumbled Numbers
 */

// @lc code=start
/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
  const getMapped = (num) => {
    if (num === 0) return mapping[0];
    let result = 0;
    let place = 1;
    while (num > 0) {
      result += mapping[num % 10] * place;
      place *= 10;
      num = Math.floor(num / 10);
    }
    return result;
  };

  return nums
    .map((v, i) => ({ v, mapped: getMapped(v), i }))
    .sort((a, b) => a.mapped !== b.mapped ? a.mapped - b.mapped : a.i - b.i)
    .map(x => x.v);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortJumbled([8,9,4,0,2,1,3,5,7,6], [991,338,38]))); // [338,38,991]
console.log(JSON.stringify(sortJumbled([0,1,2,3,4,5,6,7,8,9], [789,456,123]))); // [123,456,789]
console.log(JSON.stringify(sortJumbled([9,8,7,6,5,4,3,2,1,0], [0,1,2]))); // [2,1,0]
