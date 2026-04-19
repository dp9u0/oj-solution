/*
 * @lc app=leetcode id=2564 lang=javascript
 *
 * [2564] Substring XOR Queries
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function(s, queries) {
    const n = s.length;
    const best = new Map();

    for (let i = 0; i < n; i++) {
        if (s[i] === '0') {
            if (!best.has(0)) best.set(0, [i, i]);
            continue;
        }
        let val = 0;
        for (let j = i; j < n && j - i < 31; j++) {
            val = val * 2 + (s.charCodeAt(j) - 48);
            if (!best.has(val)) best.set(val, [i, j]);
        }
    }

    return queries.map(([f, t]) => best.get(f ^ t) || [-1, -1]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(substringXorQueries("101101", [[0,5],[1,2]])));       // [[0,2],[2,3]]
console.log(JSON.stringify(substringXorQueries("0101", [[12,8]])));               // [[-1,-1]]
console.log(JSON.stringify(substringXorQueries("1", [[4,5]])));                   // [[0,0]]
