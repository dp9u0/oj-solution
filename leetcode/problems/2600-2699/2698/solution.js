/*
 * @lc app=leetcode id=2698 lang=javascript
 *
 * [2698] Find the Punishment Number of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    const canPartition = (sq, target) => {
        const s = sq.toString();
        const dfs = (idx, sum) => {
            if (idx === s.length) return sum === target;
            let num = 0;
            for (let j = idx; j < s.length; j++) {
                num = num * 10 + (s.charCodeAt(j) - 48);
                if (sum + num > target) break;
                if (dfs(j + 1, sum + num)) return true;
            }
            return false;
        };
        return dfs(0, 0);
    };

    let ans = 0;
    for (let i = 1; i <= n; i++) {
        const sq = i * i;
        if (canPartition(sq, i)) ans += sq;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(punishmentNumber(10));  // 182
console.log(punishmentNumber(37));  // 1478
console.log(punishmentNumber(1));   // 1
console.log(punishmentNumber(1000)); // large
console.log(punishmentNumber(36));  // 1378
