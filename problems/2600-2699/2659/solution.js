/*
 * @lc app=leetcode id=2659 lang=javascript
 *
 * [2659] Make Array Empty
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
    const n = nums.length;
    const order = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);

    // BIT (Fenwick Tree)
    const bit = new Array(n + 1).fill(0);
    const update = (i, delta) => {
        for (i++; i <= n; i += i & (-i)) bit[i] += delta;
    };
    const query = (i) => {
        let s = 0;
        for (i++; i > 0; i -= i & (-i)) s += bit[i];
        return s;
    };
    const rangeQuery = (l, r) => {
        if (l > r) return 0;
        return query(r) - (l > 0 ? query(l - 1) : 0);
    };

    for (let i = 0; i < n; i++) update(i, 1);

    let ops = 0;
    let prev = -1;

    for (const [, pos] of order) {
        let rotations;
        if (prev < pos) {
            rotations = rangeQuery(prev + 1, pos - 1);
        } else {
            rotations = rangeQuery(prev + 1, n - 1) + rangeQuery(0, pos - 1);
        }
        ops += rotations + 1;
        update(pos, -1);
        prev = pos;
    }

    return ops;
};
// @lc code=end

// TEST:
console.log(countOperationsToEmptyArray([3, 4, -1]));           // 5
console.log(countOperationsToEmptyArray([1, 2, 4, 3]));         // 5
console.log(countOperationsToEmptyArray([1, 2, 3]));            // 3
console.log(countOperationsToEmptyArray([1]));                   // 1
console.log(countOperationsToEmptyArray([5, 1, 3, 2, 4]));     // 9
console.log(countOperationsToEmptyArray([-1, -2, -3]));         // 5
