/*
 * @lc app=leetcode id=3780 lang=javascript
 *
 * [3780] Maximum Sum of Three Numbers Divisible by Three
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let groups = [[], [], []];
    for (let x of nums) groups[x % 3].push(x);
    for (let g of groups) g.sort((a, b) => b - a);

    let res = 0;
    // enumerate all (a,b,c) where (a+b+c)%3==0
    for (let a = 0; a < 3; a++) {
        if (!groups[a].length) continue;
        for (let b = 0; b < 3; b++) {
            if (!groups[b].length) continue;
            for (let c = 0; c < 3; c++) {
                if ((a + b + c) % 3 !== 0) continue;
                if (!groups[c].length) continue;
                // pick one from each group
                let cnt = [0, 0, 0];
                cnt[a]++; cnt[b]++; cnt[c]++;
                let valid = true;
                let sum = 0;
                for (let r = 0; r < 3; r++) {
                    if (cnt[r] > groups[r].length) { valid = false; break; }
                    for (let k = 0; k < cnt[r]; k++) sum += groups[r][k];
                }
                if (valid) res = Math.max(res, sum);
            }
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(maximumSum([4,2,3,1])); // 9
console.log(maximumSum([2,1,5])); // 0
console.log(maximumSum([3,6,9,12])); // 27
