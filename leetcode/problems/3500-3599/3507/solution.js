/*
 * @lc app=leetcode id=3507 lang=javascript
 *
 * [3507] Minimum Pair Removal to Sort Array I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    const isSorted = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    let arr = [...nums];
    let ops = 0;

    while (!isSorted(arr)) {
        let minSum = Infinity;
        let minIdx = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            const sum = arr[i] + arr[i + 1];
            if (sum < minSum) {
                minSum = sum;
                minIdx = i;
            }
        }
        // Merge pair at minIdx
        arr.splice(minIdx, 2, minSum);
        ops++;
    }

    return ops;
};
// @lc code=end

// TEST:
console.log(minimumPairRemoval([5,2,3,1])); // 2
console.log(minimumPairRemoval([1,2,2]));   // 0
console.log(minimumPairRemoval([1]));       // 0
