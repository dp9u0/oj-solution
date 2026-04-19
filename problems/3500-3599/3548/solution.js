/*
 * @lc app=leetcode id=3548 lang=javascript
 *
 * [3548] Equal Sum Grid Partition II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    const m = grid.length, n = grid[0].length;
    let total = 0;
    for (const row of grid) for (const v of row) total += v;

    const canRemove = (r1, c1, r2, c2, target, freq) => {
        const h = r2 - r1 + 1, w = c2 - c1 + 1;
        if (h === 1 && w === 1) return false;
        if (h >= 2 && w >= 2) return freq.has(target);
        if (h === 1) return grid[r1][c1] === target || grid[r1][c2] === target;
        return grid[r1][c1] === target || grid[r2][c1] === target;
    };

    // Horizontal cuts
    {
        const topFreq = new Map(), botFreq = new Map();
        for (let i = 0; i < m; i++)
            for (let j = 0; j < n; j++)
                botFreq.set(grid[i][j], (botFreq.get(grid[i][j]) || 0) + 1);

        let topSum = 0;
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n; j++) {
                const v = grid[i][j];
                topSum += v;
                topFreq.set(v, (topFreq.get(v) || 0) + 1);
                botFreq.set(v, botFreq.get(v) - 1);
                if (botFreq.get(v) === 0) botFreq.delete(v);
            }
            const botSum = total - topSum;
            if (topSum === botSum) return true;
            if (topSum > botSum && canRemove(0, 0, i, n - 1, topSum - botSum, topFreq)) return true;
            if (botSum > topSum && canRemove(i + 1, 0, m - 1, n - 1, botSum - topSum, botFreq)) return true;
        }
    }

    // Vertical cuts
    {
        const leftFreq = new Map(), rightFreq = new Map();
        for (let i = 0; i < m; i++)
            for (let j = 0; j < n; j++)
                rightFreq.set(grid[i][j], (rightFreq.get(grid[i][j]) || 0) + 1);

        let leftSum = 0;
        for (let j = 0; j < n - 1; j++) {
            for (let i = 0; i < m; i++) {
                const v = grid[i][j];
                leftSum += v;
                leftFreq.set(v, (leftFreq.get(v) || 0) + 1);
                rightFreq.set(v, rightFreq.get(v) - 1);
                if (rightFreq.get(v) === 0) rightFreq.delete(v);
            }
            const rightSum = total - leftSum;
            if (leftSum === rightSum) return true;
            if (leftSum > rightSum && canRemove(0, 0, m - 1, j, leftSum - rightSum, leftFreq)) return true;
            if (rightSum > leftSum && canRemove(0, j + 1, m - 1, n - 1, rightSum - leftSum, rightFreq)) return true;
        }
    }

    return false;
};
// @lc code=end

// TEST:
console.log(canPartitionGrid([[1,4],[2,3]])); // true
console.log(canPartitionGrid([[1,2],[3,4]])); // true
console.log(canPartitionGrid([[1,2,4],[2,3,5]])); // false
console.log(canPartitionGrid([[4,1,8],[3,2,6]])); // false
console.log(canPartitionGrid([[1,5],[2,3],[4,6]])); // true (horizontal cut after row 1, discount 1 from top)
