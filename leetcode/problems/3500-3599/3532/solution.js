/*
 * @lc app=leetcode id=3532 lang=javascript
 *
 * [3532] Path Existence Queries in a Graph I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => parent[x] === x ? x : (parent[x] = find(parent[x]));
    const union = (a, b) => { parent[find(a)] = find(b); };

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] <= maxDiff) union(i - 1, i);
    }

    return queries.map(([u, v]) => find(u) === find(v));
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(result) === JSON.stringify(expected) ? 'OK' : 'FAIL expected ' + JSON.stringify(expected));
};
test(pathExistenceQueries, [2, [1,3], 1, [[0,0],[0,1]]], [true,false]);
test(pathExistenceQueries, [4, [2,5,6,8], 2, [[0,1],[0,2],[1,3],[2,3]]], [false,false,true,true]);
test(pathExistenceQueries, [3, [1,2,3], 1, [[0,2]]], [true]);
test(pathExistenceQueries, [3, [1,5,10], 1, [[0,1],[1,2]]], [false,false]);
test(pathExistenceQueries, [1, [0], 0, [[0,0]]], [true]);
