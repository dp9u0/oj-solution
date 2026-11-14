/*
 * @lc app=leetcode.cn id=1524 lang=javascript
 *
 * [1524] 和为奇数的子数组数目
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
  const MOD = 1e9 + 7;
  let result = 0;
  // counts of prefix sums with even/odd parity; P[0] = 0 is even
  let evenCnt = 1;
  let oddCnt = 0;
  let oddPrefix = false;

  for (const num of arr) {
    oddPrefix = num % 2 === 1 ? !oddPrefix : oddPrefix;
    if (oddPrefix) {
      result = (result + evenCnt) % MOD;
      oddCnt++;
    } else {
      result = (result + oddCnt) % MOD;
      evenCnt++;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(numOfSubarrays([1, 3, 5]) === 4); // 1
console.log(numOfSubarrays([2, 4, 6]) === 0); // 2
console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]) === 16); // 3
console.log(numOfSubarrays([100, 100, 99, 99]) === 4); // 4
console.log(numOfSubarrays([7]) === 1); // 5
console.log(numOfSubarrays([1, 1, 1, 1, 1]) === 9); // 6: five len-1 + three len-3 + one len-5
console.log(numOfSubarrays([2, 2, 1]) === 3); // 7: [1],[2,1],[2,2,1]
