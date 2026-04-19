/*
 * @lc app=leetcode id=2910 lang=javascript
 *
 * [2910] Minimum Number of Groups to Create a Valid Assignment
 */

// @lc code=start
/**
 * @param {number[]} balls
 * @return {number}
 */
var minGroupsForValidAssignment = function(balls) {
    const cnt = new Map();
    for (const b of balls) cnt.set(b, (cnt.get(b) || 0) + 1);
    const counts = [...cnt.values()];
    const minCnt = Math.min(...counts);

    for (let s = minCnt; s >= 1; s--) {
        let total = 0;
        let valid = true;
        for (const c of counts) {
            const g = Math.ceil(c / (s + 1));
            if (g * s > c) { valid = false; break; }
            total += g;
        }
        if (valid) return total;
    }
    return balls.length;
};
// @lc code=end

// TEST:
console.log(minGroupsForValidAssignment([3,2,3,2,3])); // 2
console.log(minGroupsForValidAssignment([10,10,10,3,1,1])); // 4
console.log(minGroupsForValidAssignment([1,1,1,1,1,1])); // 1
console.log(minGroupsForValidAssignment([1,2,3])); // 3 (each different, s=1)
console.log(minGroupsForValidAssignment([2,2,2,2,2,2])); // 1
