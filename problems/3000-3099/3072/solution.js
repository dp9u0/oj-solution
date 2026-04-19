/*
 * @lc app=leetcode id=3072 lang=javascript
 *
 * [3072] Distribute Elements Into Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    // Coordinate compression
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    const rank = new Map();
    sorted.forEach((v, i) => rank.set(v, i + 1));
    const m = sorted.length;

    // BIT
    class BIT {
        constructor(n) { this.tree = new Array(n + 1).fill(0); this.n = n; }
        update(i, delta) { for (; i <= this.n; i += i & -i) this.tree[i] += delta; }
        query(i) { let s = 0; for (; i > 0; i -= i & -i) s += this.tree[i]; return s; }
    }

    const bit1 = new BIT(m), bit2 = new BIT(m);
    const arr1 = [nums[0]], arr2 = [nums[1]];
    bit1.update(rank.get(nums[0]), 1);
    bit2.update(rank.get(nums[1]), 1);

    for (let i = 2; i < nums.length; i++) {
        const r = rank.get(nums[i]);
        const gc1 = arr1.length - bit1.query(r);
        const gc2 = arr2.length - bit2.query(r);
        if (gc1 > gc2 || (gc1 === gc2 && (arr1.length <= arr2.length))) {
            arr1.push(nums[i]);
            bit1.update(r, 1);
        } else {
            arr2.push(nums[i]);
            bit2.update(r, 1);
        }
    }
    return arr1.concat(arr2);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(resultArray([2,1,3,3]))); // [2,3,1,3]
console.log(JSON.stringify(resultArray([5,14,3,1,2]))); // [5,3,1,2,14]
console.log(JSON.stringify(resultArray([3,3,3,3]))); // [3,3,3,3]
