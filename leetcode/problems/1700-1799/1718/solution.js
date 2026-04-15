/*
 * @lc app=leetcode id=1718 lang=javascript
 *
 * [1718] Construct the Lexicographically Largest Valid Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    const len = 2 * n - 1;
    const result = new Array(len).fill(0);
    const used = new Array(n + 1).fill(false);

    const dfs = (pos) => {
        if (pos === len) return true;
        if (result[pos] !== 0) return dfs(pos + 1);

        for (let num = n; num >= 1; num--) {
            if (used[num]) continue;
            if (num === 1) {
                result[pos] = 1;
                used[1] = true;
                if (dfs(pos + 1)) return true;
                result[pos] = 0;
                used[1] = false;
            } else {
                const j = pos + num;
                if (j < len && result[j] === 0) {
                    result[pos] = num;
                    result[j] = num;
                    used[num] = true;
                    if (dfs(pos + 1)) return true;
                    result[pos] = 0;
                    result[j] = 0;
                    used[num] = false;
                }
            }
        }
        return false;
    };

    dfs(0);
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(constructDistancedSequence(3))); // [3,1,2,3,2]
console.log(JSON.stringify(constructDistancedSequence(5))); // [5,3,1,4,3,5,2,4,2]
console.log(JSON.stringify(constructDistancedSequence(1))); // [1]
