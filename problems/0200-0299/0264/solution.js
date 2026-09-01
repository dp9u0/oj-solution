/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // 解题思路：
    // 丑数是指只包含质因数 2, 3, 5 的正整数。
    // 我们可以使用动态规划的方法来生成丑数序列。
    // 使用三个指针 i2, i3, i5 分别指向下一个应该乘以 2, 3, 5 的位置。
    // 每次从这三个数中选出最小的一个作为下一个丑数，并移动对应的指针。
    const uglyNumbers = [1];
    let i2 = 0, i3 = 0, i5 = 0;

    while (uglyNumbers.length < n) {
        const next2 = uglyNumbers[i2] * 2;
        const next3 = uglyNumbers[i3] * 3;
        const next5 = uglyNumbers[i5] * 5;
        const nextUgly = Math.min(next2, next3, next5);

        if (nextUgly === next2) i2++;
        if (nextUgly === next3) i3++;
        if (nextUgly === next5) i5++;

        uglyNumbers.push(nextUgly);
    }

    return uglyNumbers[n - 1];
};
// @lc code=end

// TEST: 测试用例
console.log(nthUglyNumber(10)); // 输出: 12
console.log(nthUglyNumber(1));  // 输出: 1
console.log(nthUglyNumber(15)); // 输出: 24
console.log(nthUglyNumber(20)); // 输出: 36
console.log(nthUglyNumber(50)); // 输出: 243
