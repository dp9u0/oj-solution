/*
 * @lc app=leetcode.cn id=2189 lang=javascript
 *
 * [2189] 建造纸牌屋的方法数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var houseOfCards = function(n) {
    const memo = new Map();
    const dfs = (left, prev) => {
        if (left === 0) return 1;
        const key = left * 1000 + prev;
        if (memo.has(key)) return memo.get(key);
        const tMax = Math.min(prev - 1, (left + 1) / 3 | 0);
        let ways = 0;
        for (let t = 1; t <= tMax; t++) {
            ways += dfs(left - (3 * t - 1), t);
        }
        memo.set(key, ways);
        return ways;
    };
    return dfs(n, n + 1); // sentinel: first row unrestricted
};
// @lc code=end

// TEST:
console.log(houseOfCards(16)); // 2
console.log(houseOfCards(2)); // 1
console.log(houseOfCards(4)); // 0
console.log(houseOfCards(5)); // 1 (single row of 2 triangles)
console.log(houseOfCards(1)); // 0
