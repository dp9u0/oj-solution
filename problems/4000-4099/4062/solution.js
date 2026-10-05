/*
 * @lc app=leetcode.cn id=4062 lang=javascript
 *
 * [4062] 成对操作转化数组
 */

// @lc code=start
/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var canTransform = function(source, target) {
    // 操作保持 source[i] + source[j] 不变，总和是不变量
    let sumSource = 0;
    for (const x of source) sumSource += x;
    const sorelanuxi = target;
    let sumTarget = 0;
    for (const x of sorelanuxi) sumTarget += x;
    // 总和相等即充分：用锚点逐个把 source[k] 设为 target[k]，锚点最终自然等于 target[n-1]
    return sumSource === sumTarget;
};
// @lc code=end

// TEST:
console.log(canTransform([1, 2, 3], [0, 2, 4])); // true
console.log(canTransform([-5, -5], [-15, 5])); // true
console.log(canTransform([1, 2, 1], [0, 2, 5])); // false (总和不同)
console.log(canTransform([0, 0], [0, 0])); // true (零次操作)
console.log(canTransform([1, 1], [2, 0])); // true
console.log(canTransform([1, 2], [1, 3])); // false
console.log(canTransform([1000000000, -1000000000], [0, 0])); // true (总和均为 0)
