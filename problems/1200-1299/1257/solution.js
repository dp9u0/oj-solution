/*
 * @lc app=leetcode.cn id=1257 lang=javascript
 *
 * [1257] 最小公共区域
 */

// @lc code=start
/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
    const parent = new Map();
    for (const row of regions) {
        for (let i = 1; i < row.length; i++) parent.set(row[i], row[0]);
    }
    const ancestors = new Set();
    let a = region1;
    while (a !== undefined) { // root's parent is undefined
        ancestors.add(a);
        a = parent.get(a);
    }
    let b = region2;
    while (!ancestors.has(b)) b = parent.get(b);
    return b;
};
// @lc code=end

// TEST:
const R = [
    ["Earth","North America","South America"],
    ["North America","United States","Canada"],
    ["United States","New York","Boston"],
    ["Canada","Ontario","Quebec"],
    ["South America","Brazil"],
];
console.log(findSmallestRegion(R, "Quebec", "New York")); // "North America"
console.log(findSmallestRegion(R, "Canada", "South America")); // "Earth"
console.log(findSmallestRegion(R, "New York", "Boston")); // "United States"
