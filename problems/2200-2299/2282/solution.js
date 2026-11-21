/*
 * @lc app=leetcode.cn id=2282 lang=javascript
 *
 * [2282] 在一个网格中可以看到的人数
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var seePeople = function(heights) {
    const m = heights.length, n = heights[0].length;
    const ans = Array.from({ length: m }, () => new Int32Array(n));
    const line = (len, get, set) => {
        const stack = [];
        for (let k = len - 1; k >= 0; k--) {
            const h = get(k);
            let strict = 0, lastPopped = -1;
            while (stack.length && stack[stack.length - 1] <= h) {
                lastPopped = stack.pop();
                if (lastPopped < h) strict++;
            }
            const visible = stack.length
                ? strict + 1
                : strict + (lastPopped === h ? 1 : 0);
            set(k, visible);
            stack.push(h);
        }
    };
    for (let r = 0; r < m; r++) {
        line(n, (c) => heights[r][c], (c, v) => { ans[r][c] += v; });
    }
    for (let c = 0; c < n; c++) {
        line(m, (r) => heights[r][c], (r, v) => { ans[r][c] += v; });
    }
    return ans.map((row) => Array.from(row));
};
// @lc code=end

// TEST:
console.log(JSON.stringify(seePeople([[3,1,4,2,5]]))); // [[2,1,2,1,0]]
console.log(JSON.stringify(seePeople([[5,1],[3,1],[4,1]]))); // [[3,1],[2,1],[1,0]]
console.log(JSON.stringify(seePeople([[1]]))); // [[0]]
console.log(JSON.stringify(seePeople([[1,2,3],[3,2,1]]))); // [[2,2,1],[1,1,0]]
console.log(JSON.stringify(seePeople([[2,2],[2,2]]))); // [[2,1],[1,0]]
