/*
 * @lc app=leetcode id=493 lang=javascript
 *
 * [493] Reverse Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    const mergeSort = (l, r) => {
        if (l >= r) return 0;
        const mid = (l + r) >> 1;
        let count = mergeSort(l, mid) + mergeSort(mid + 1, r);

        // Count cross reverse pairs
        let j = mid + 1;
        for (let i = l; i <= mid; i++) {
            while (j <= r && nums[i] > 2 * nums[j]) j++;
            count += j - (mid + 1);
        }

        // Merge sorted halves
        const tmp = [];
        let i = l;
        j = mid + 1;
        while (i <= mid && j <= r) {
            if (nums[i] <= nums[j]) tmp.push(nums[i++]);
            else tmp.push(nums[j++]);
        }
        while (i <= mid) tmp.push(nums[i++]);
        while (j <= r) tmp.push(nums[j++]);
        for (let k = 0; k < tmp.length; k++) nums[l + k] = tmp[k];

        return count;
    };

    return mergeSort(0, nums.length - 1);
};
// @lc code=end

// TEST:
console.log(reversePairs([1, 3, 2, 3, 1]) === 2);
console.log(reversePairs([2, 4, 3, 5, 1]) === 3);
console.log(reversePairs([5, 4, 3, 2, 1]) === 4);
console.log(reversePairs([1, 2, 3, 4, 5]) === 0);
console.log(reversePairs([1]) === 0);
console.log(reversePairs([2147483647, 2147483647, -2147483648, -2147483648]) === 5);
