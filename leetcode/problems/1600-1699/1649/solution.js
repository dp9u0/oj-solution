/*
 * @lc app=leetcode id=1649 lang=javascript
 *
 * [1649] Create Sorted Array through Instructions
 */

// @lc code=start
/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function(instructions) {
    const MOD = 1e9 + 7;

    let maxVal = 0;
    for (const x of instructions) if (x > maxVal) maxVal = x;
    const size = maxVal + 2;

    const bit = new Int32Array(size);

    const update = (i) => {
        for (; i < size; i += i & (-i)) bit[i]++;
    };

    const query = (i) => {
        let s = 0;
        for (; i > 0; i -= i & (-i)) s += bit[i];
        return s;
    };

    let total = 0;
    let cnt = 0;

    for (const x of instructions) {
        const less = query(x - 1);
        const greater = cnt - query(x);
        total = (total + Math.min(less, greater)) % MOD;
        update(x);
        cnt++;
    }

    return total;
};
// @lc code=end

// TEST:
console.log(createSortedArray([1, 5, 6, 2])); // 1
console.log(createSortedArray([1, 2, 3, 6, 5, 4])); // 3
console.log(createSortedArray([1, 3, 3, 3, 2, 4, 2, 1, 2])); // 4
console.log(createSortedArray([1])); // 0
console.log(createSortedArray([1, 1, 1])); // 0
console.log(createSortedArray([3, 1, 2])); // 1
