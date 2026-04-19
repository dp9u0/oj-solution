/*
 * @lc app=leetcode id=1815 lang=javascript
 *
 * [1815] Maximum Number of Groups Getting Fresh Donuts
 */

// @lc code=start
/**
 * @param {number} batchSize
 * @param {number[]} groups
 * @return {number}
 */
var maxHappyGroups = function(batchSize, groups) {
    let happy = 0;
    const cnt = new Array(batchSize).fill(0);
    for (const g of groups) {
        const r = g % batchSize;
        if (r === 0) { happy++; continue; }
        cnt[r]++;
    }

    // Greedy pairing: (r, batchSize-r) pairs each contribute 1 happy group
    for (let r = 1; r < batchSize - r; r++) {
        const pairs = Math.min(cnt[r], cnt[batchSize - r]);
        happy += pairs;
        cnt[r] -= pairs;
        cnt[batchSize - r] -= pairs;
    }
    if (batchSize % 2 === 0) {
        const half = batchSize / 2;
        happy += Math.floor(cnt[half] / 2);
        cnt[half] %= 2;
    }

    // DFS with memoization for remaining groups
    const memo = new Map();

    const dfs = (leftover) => {
        const key = cnt.slice(1, batchSize).join(',') + '|' + leftover;
        if (memo.has(key)) return memo.get(key);

        let result = 0;
        for (let r = 1; r < batchSize; r++) {
            if (cnt[r] === 0) continue;
            cnt[r]--;
            const gain = leftover === 0 ? 1 : 0;
            result = Math.max(result, gain + dfs((leftover + r) % batchSize));
            cnt[r]++;
        }

        memo.set(key, result);
        return result;
    };

    return happy + dfs(0);
};
// @lc code=end

// TEST:
console.log(maxHappyGroups(3, [1,2,3,4,5,6]));              // 4
console.log(maxHappyGroups(4, [1,3,2,5,2,2,1,6]));          // 4
console.log(maxHappyGroups(2, [1,1,1,1]));                    // 4
console.log(maxHappyGroups(3, [1,1,1]));                      // 3
console.log(maxHappyGroups(5, [1,2,3,4,5]));                  // 3
console.log(maxHappyGroups(7, [8,8,3,5,6]));                  // 2
