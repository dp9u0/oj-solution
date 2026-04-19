/*
 * @lc app=leetcode id=3669 lang=javascript
 *
 * [3669] Balanced K-Factor Decomposition
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var minDifference = function(n, k) {
    let bestDiff = Infinity;
    let bestResult = null;

    const dfs = (remaining, count, start, path) => {
        if (count === k) {
            if (remaining === 1) {
                const diff = Math.max(...path) - Math.min(...path);
                if (diff < bestDiff) {
                    bestDiff = diff;
                    bestResult = [...path];
                }
            }
            return;
        }
        const need = k - count;
        for (let f = start; f * f <= remaining; f++) {
            if (remaining % f === 0) {
                path.push(f);
                dfs(remaining / f, count + 1, f, path);
                path.pop();
            }
        }
        // remaining itself as a factor (must be >= start)
        if (remaining >= start && need === 1) {
            path.push(remaining);
            dfs(1, count + 1, remaining, path);
            path.pop();
        }
    };

    dfs(n, 0, 1, []);
    return bestResult || [n];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minDifference(100, 2))); // [10,10]
console.log(JSON.stringify(minDifference(44, 3))); // [2,2,11]
console.log(JSON.stringify(minDifference(6, 2))); // [2,3]
