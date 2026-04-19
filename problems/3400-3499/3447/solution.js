/*
 * @lc app=leetcode id=3447 lang=javascript
 *
 * [3447] Assign Elements to Groups with Constraints
 */

// @lc code=start
/**
 * @param {number[]} groups
 * @param {number[]} elements
 * @return {number[]}
 */
var assignElements = function(groups, elements) {
    const MAX = 100001;
    const bestAssign = new Int32Array(MAX).fill(-1);
    const seen = new Uint8Array(MAX);

    for (let j = 0; j < elements.length; j++) {
        const e = elements[j];
        if (seen[e]) continue;
        seen[e] = 1;
        for (let m = e; m < MAX; m += e) {
            if (bestAssign[m] === -1) bestAssign[m] = j;
        }
    }

    return groups.map(g => bestAssign[g]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(assignElements([8,4,3,2,4], [4,2]))); // [0,0,-1,1,0]
console.log(JSON.stringify(assignElements([2,3,5,7], [5,3,3]))); // [-1,1,0,-1]
console.log(JSON.stringify(assignElements([10,21,30,41], [2,1]))); // [0,1,0,1]
console.log(JSON.stringify(assignElements([1], [1]))); // [0]
console.log(JSON.stringify(assignElements([6], [4,3]))); // [1]
