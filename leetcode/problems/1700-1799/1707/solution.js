/*
 * @lc app=leetcode id=1707 lang=javascript
 *
 * [1707] Maximum XOR With an Element From Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function(nums, queries) {
    nums.sort((a, b) => a - b);
    const qWithIdx = queries.map((q, i) => ({ x: q[0], m: q[1], i }));
    qWithIdx.sort((a, b) => a.m - b.m);
    const res = new Array(queries.length);
    let ni = 0;
    const root = [null, null];
    const insert = (num) => {
        let node = root;
        for (let b = 30; b >= 0; b--) {
            const bit = (num >> b) & 1;
            if (!node[bit]) node[bit] = [null, null];
            node = node[bit];
        }
    };
    const query = (x) => {
        let node = root, val = 0;
        for (let b = 30; b >= 0; b--) {
            const bit = (x >> b) & 1;
            if (node[1 - bit]) { val |= (1 << b); node = node[1 - bit]; }
            else node = node[bit];
        }
        return val;
    };
    for (const { x, m, i } of qWithIdx) {
        while (ni < nums.length && nums[ni] <= m) insert(nums[ni++]);
        res[i] = ni > 0 ? query(x) : -1;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(maximizeXor([0,1,2,3,4], [[3,1],[1,3],[5,6]])); // [3,3,7]
console.log(maximizeXor([5,2,4,6,6,3], [[12,4],[8,1],[6,3]])); // [15,-1,5]
