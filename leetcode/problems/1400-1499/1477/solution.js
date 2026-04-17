/*
 * @lc app=leetcode id=1477 lang=javascript
 *
 * [1477] Find Two Non-overlapping Sub-arrays Each With Target Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length;
    const best = new Array(n).fill(Infinity);
    let ans = Infinity;

    let sum = 0, l = 0;
    for (let r = 0; r < n; r++) {
        sum += arr[r];

        // Shrink window from left while sum > target
        while (sum > target) {
            sum -= arr[l];
            l++;
        }

        if (sum === target) {
            const len = r - l + 1;
            if (l > 0 && best[l - 1] !== Infinity) {
                ans = Math.min(ans, len + best[l - 1]);
            }
            best[r] = Math.min(r > 0 ? best[r - 1] : Infinity, len);
        } else {
            best[r] = r > 0 ? best[r - 1] : Infinity;
        }
    }

    return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minSumOfLengths([3,2,2,4,3], 3));           // 2
console.log(minSumOfLengths([7,3,4,7], 7));               // 2
console.log(minSumOfLengths([4,3,2,6,2,3,4], 6));       // -1
console.log(minSumOfLengths([1,1,1,1,1], 2));             // 4
console.log(minSumOfLengths([1,2,3], 3));                  // -1 (only one)
