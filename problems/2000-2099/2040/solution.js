/*
 * @lc app=leetcode id=2040 lang=javascript
 *
 * [2040] Kth Smallest Product of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    const n1 = nums1.length, n2 = nums2.length;

    const countLE = (v) => {
        let cnt = 0;
        for (let i = 0; i < n1; i++) {
            const x = nums1[i];
            if (x > 0) {
                const t = Math.floor(v / x);
                let lo = 0, hi = n2;
                while (lo < hi) { const mid = (lo + hi) >> 1; if (nums2[mid] <= t) lo = mid + 1; else hi = mid; }
                cnt += lo;
            } else if (x < 0) {
                const t = Math.ceil(v / x);
                let lo = 0, hi = n2;
                while (lo < hi) { const mid = (lo + hi) >> 1; if (nums2[mid] < t) lo = mid + 1; else hi = mid; }
                cnt += n2 - lo;
            } else {
                if (v >= 0) cnt += n2;
            }
        }
        return cnt;
    };

    const corners = [nums1[0]*nums2[0], nums1[0]*nums2[n2-1], nums1[n1-1]*nums2[0], nums1[n1-1]*nums2[n2-1]];
    let lo = Math.min(...corners), hi = Math.max(...corners);
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (countLE(mid) >= k) hi = mid; else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(kthSmallestProduct([2,5], [3,4], 2)); // 8
console.log(kthSmallestProduct([-4,-2,0,3], [2,4], 6)); // 0
console.log(kthSmallestProduct([-2,-1,0,1,2], [-3,-1,2,4,5], 3)); // -6
console.log(kthSmallestProduct([1,2], [1,2], 1)); // 1
console.log(kthSmallestProduct([-5,-3,-1], [1,2,3], 5)); // -5
