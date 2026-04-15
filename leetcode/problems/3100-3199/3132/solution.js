/*
 * @lc app=leetcode id=3132 lang=javascript
 *
 * [3132] Find the Integer Added to Array II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let n = nums1.length, m = nums2.length;
    let check = (startIdx) => {
        let x = nums2[0] - nums1[startIdx];
        let j = 0;
        for (let i = startIdx; i < n && j < m; i++) {
            if (nums1[i] + x === nums2[j]) j++;
        }
        return j === m ? x : Infinity;
    };
    let ans = Infinity;
    for (let i = 0; i <= 2; i++) {
        ans = Math.min(ans, check(i));
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minimumAddedInteger([4,20,16,12,8], [14,18,10]));
console.log(minimumAddedInteger([3,5,5,3], [7,7]));
console.log(minimumAddedInteger([1,2,3,4,5], [3,5,7]));
