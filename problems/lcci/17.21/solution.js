/*
 * @lc app=leetcode.cn id=面试题 17.21 lang=javascript
 *
 * [面试题 17.21] 直方图的水量
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 双指针：较矮一侧水位由自身决定（另一侧必有更高者），结算后内移
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax <= rightMax) {
            water += leftMax - height[left];
            left++;
        } else {
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
};
// @lc code=end

// TEST:
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6);
console.log(trap([]) === 0);
console.log(trap([1]) === 0);
console.log(trap([1, 2, 3, 4]) === 0); // 递增不蓄水
console.log(trap([3, 0, 3]) === 3);
console.log(trap([4, 2, 0, 3, 2, 5]) === 9);
console.log(trap([5, 4, 1, 2]) === 1); // 递减后回升只蓄 1
