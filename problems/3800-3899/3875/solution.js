/*
 * @lc app=leetcode.cn id=3875 lang=javascript
 *
 * [3875] 构造奇偶一致的数组 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
  return true;
};
// @lc code=end

// TEST:
// 全部同奇偶 → true
console.log('test1:', uniformArray([4, 6]), 'expect: true');
// 奇偶混合（2,3）→ true
console.log('test2:', uniformArray([2, 3]), 'expect: true');
// 奇偶混合 → true
console.log('test3:', uniformArray([1, 2, 3, 4]), 'expect: true');
// 单元素 → true
console.log('test4:', uniformArray([5]), 'expect: true');
// 奇偶混合 → true
console.log('test5:', uniformArray([1, 8]), 'expect: true');
