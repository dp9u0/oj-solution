/*
 * @lc app=leetcode id=3771 lang=javascript
 *
 * [3771] Total Score of Dungeon Runs
 */

// @lc code=start
/**
 * @param {number} hp
 * @param {number[]} damage
 * @param {number[]} requirement
 * @return {number}
 */
var totalScore = function(hp, damage, requirement) {
    let n = damage.length;
    let prefixDmg = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefixDmg[i + 1] = prefixDmg[i] + damage[i];

    // vals[i] = requirement[i] + prefixDmg[i+1] (for room i, 0-indexed)
    // query threshold = hp + prefixDmg[j] (for starting from room j)
    let allVals = [];
    for (let i = 0; i < n; i++) {
        allVals.push(requirement[i] + prefixDmg[i + 1]);
        allVals.push(hp + prefixDmg[i]);
    }
    allVals.sort((a, b) => a - b);
    let rank = (v) => {
        let lo = 0, hi = allVals.length;
        while (lo < hi) {
            let mid = (lo + hi) >> 1;
            if (allVals[mid] < v) lo = mid + 1; else hi = mid;
        }
        return lo + 1;
    };

    let bitSize = allVals.length + 2;
    let bit = new Array(bitSize).fill(0);
    let update = (i) => { while (i < bitSize) { bit[i]++; i += i & (-i); } };
    let query = (i) => { let s = 0; while (i > 0) { s += bit[i]; i -= i & (-i); } return s; };

    let ans = 0;
    for (let j = n - 1; j >= 0; j--) {
        // add room j's threshold to BIT
        let val = requirement[j] + prefixDmg[j + 1];
        update(rank(val));
        // query: how many thresholds <= hp + prefixDmg[j]
        let threshold = hp + prefixDmg[j];
        ans += query(rank(threshold));
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(totalScore(11, [3,6,7], [4,2,5]));
console.log(totalScore(2, [10000,1], [1,1]));
console.log(totalScore(5, [1,1,1], [1,1,1]));
