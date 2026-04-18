/*
 * @lc app=leetcode id=3587 lang=javascript
 *
 * [3587] Minimum Adjacent Swaps to Alternate Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const evens = [], odds = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) evens.push(i);
        else odds.push(i);
    }

    const countInversions = (arr) => {
        const sorted = [...arr].sort((a, b) => a - b);
        const rank = new Map();
        for (let i = 0; i < sorted.length; i++) rank.set(sorted[i], i + 1);
        const size = arr.length + 2;
        const bit = new Int32Array(size);
        let inv = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            const r = rank.get(arr[i]);
            for (let j = r - 1; j > 0; j -= j & -j) inv += bit[j];
            for (let j = r; j < size; j += j & -j) bit[j]++;
        }
        return inv;
    };

    let result = Infinity;

    for (let startEven = 0; startEven <= 1; startEven++) {
        const evenCount = startEven === 0 ? Math.ceil(n / 2) : Math.floor(n / 2);
        const oddCount = n - evenCount;
        if (evens.length !== evenCount || odds.length !== oddCount) continue;

        const ranks = new Array(n);
        for (let i = 0; i < evens.length; i++) {
            ranks[evens[i]] = startEven === 0 ? i * 2 : i * 2 + 1;
        }
        for (let i = 0; i < odds.length; i++) {
            ranks[odds[i]] = startEven === 0 ? i * 2 + 1 : i * 2;
        }

        result = Math.min(result, countInversions(ranks));
    }

    return result === Infinity ? -1 : result;
};
// @lc code=end

// TEST:
console.log(minSwaps([2,4,6,5,7])); // 3
console.log(minSwaps([2,4,5,7])); // 1
console.log(minSwaps([1,2,3])); // 0
console.log(minSwaps([4,5,6,8])); // -1
console.log(minSwaps([1,3,2,4])); // 1
