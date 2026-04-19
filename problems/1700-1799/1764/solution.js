/*
 * @lc app=leetcode id=1764 lang=javascript
 *
 * [1764] Form Array by Concatenating Subarrays of Another Array
 */

// @lc code=start
/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
    let pos = 0;
    const m = nums.length;

    for (const group of groups) {
        const len = group.length;
        let found = false;
        while (pos + len <= m) {
            let match = true;
            for (let k = 0; k < len; k++) {
                if (nums[pos + k] !== group[k]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                found = true;
                pos += len;
                break;
            }
            pos++;
        }
        if (!found) return false;
    }

    return true;
};
// @lc code=end

// TEST:
console.log(canChoose([[1,-1,-1],[3,-2,0]], [1,-1,0,1,-1,-1,3,-2,0])); // true
console.log(canChoose([[10,-2],[1,2,3,4]], [1,2,3,4,10,-2]));           // false
console.log(canChoose([[1,2,3],[3,4]], [7,7,1,2,3,4,7,7]));             // false
