/*
 * @lc app=leetcode id=2179 lang=javascript
 *
 * [2179] Count Good Triplets in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function(nums1, nums2) {
    const n = nums1.length;
    const pos2 = new Array(n);
    for (let i = 0; i < n; i++) pos2[nums2[i]] = i;

    const a = new Array(n);
    for (let i = 0; i < n; i++) a[i] = pos2[nums1[i]];

    const bit = new Array(n + 1).fill(0);
    const update = (i) => { for (i++; i <= n; i += i & -i) bit[i]++; };
    const query = (i) => { let s = 0; for (i++; i > 0; i -= i & -i) s += bit[i]; return s; };

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const left = query(a[i] - 1);
        const rightCount = (n - 1 - a[i]) - (i - left);
        ans += left * rightCount;
        update(a[i]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(goodTriplets([2,0,1,3], [0,1,2,3])); // 1
console.log(goodTriplets([4,0,1,3,2], [4,1,0,2,3])); // 4
console.log(goodTriplets([0,1,2], [0,1,2])); // 1
console.log(goodTriplets([2,1,0], [0,1,2])); // 0
console.log(goodTriplets([1,0,2], [0,1,2])); // 0
