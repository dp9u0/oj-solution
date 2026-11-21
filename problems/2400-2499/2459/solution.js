/*
 * @lc app=leetcode.cn id=2459 lang=javascript
 *
 * [2459] 通过移动项目到空白区域来排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortArray = function(nums) {
    const n = nums.length;
    const cost = (shift) => {
        // target position of item x: (x + shift) % n; shift = 0 for [0..n-1], n-1 for [1..n-1,0]
        const perm = new Int32Array(n);
        let blank = -1;
        for (let p = 0; p < n; p++) {
            perm[p] = (nums[p] + shift) % n;
            if (nums[p] === 0) blank = p;
        }
        const seen = new Uint8Array(n);
        let total = 0;
        for (let p = 0; p < n; p++) {
            if (seen[p]) continue;
            let len = 0, hasBlank = false, cur = p;
            while (!seen[cur]) {
                seen[cur] = 1;
                if (cur === blank) hasBlank = true;
                cur = perm[cur];
                len++;
            }
            if (len >= 2) total += hasBlank ? len - 1 : len + 1;
        }
        return total;
    };
    return Math.min(cost(0), cost(n - 1));
};
// @lc code=end

// TEST:
console.log(sortArray([4,2,0,3,1])); // 3
console.log(sortArray([1,2,3,4,0])); // 0
console.log(sortArray([1,0,2,4,3])); // 2
console.log(sortArray([0,1,2])); // 0
console.log(sortArray([2,1,0])); // 1 (move item 2 into the blank -> [0,1,2])
