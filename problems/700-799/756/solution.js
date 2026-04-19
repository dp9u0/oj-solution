/*
 * @lc app=leetcode id=756 lang=javascript
 *
 * [756] Pyramid Transition Matrix
 */

// @lc code=start
/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    const rules = new Map();
    for (const s of allowed) {
        const key = s[0] + s[1];
        if (!rules.has(key)) rules.set(key, []);
        rules.get(key).push(s[2]);
    }

    const memo = new Map();

    const build = (row, pos, next) => {
        if (pos === row.length - 1) return dfs(next);
        const tops = rules.get(row[pos] + row[pos + 1]);
        if (!tops) return false;
        for (const c of tops) {
            if (build(row, pos + 1, next + c)) return true;
        }
        return false;
    };

    const dfs = (row) => {
        if (row.length === 1) return true;
        if (memo.has(row)) return memo.get(row);
        const result = build(row, 0, '');
        memo.set(row, result);
        return result;
    };

    return dfs(bottom);
};
// @lc code=end

// TEST:
console.log(pyramidTransition("BCD", ["BCC","CDE","CEA","FFF"])); // true
console.log(pyramidTransition("AAAA", ["AAB","AAC","BCD","BBE","DEF"])); // false
console.log(pyramidTransition("AB", ["ABC","ABD","ABE"])); // true
console.log(pyramidTransition("ABC", [])); // false
console.log(pyramidTransition("BCAB", ["BCC","CAE","CAD","ABA","CDC","DAE","CEA"])); // true
