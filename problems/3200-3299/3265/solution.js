/*
 * @lc app=leetcode id=3265 lang=javascript
 *
 * [3265] Count Almost Equal Pairs I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function(nums) {
    let almostEqual = (a, b) => {
        if (a === b) return true;
        let sa = String(a), sb = String(b);
        // Pad to same length
        let maxLen = Math.max(sa.length, sb.length);
        sa = sa.padStart(maxLen, '0');
        sb = sb.padStart(maxLen, '0');
        // Try swapping any two positions in sa to get sb
        let arr = sa.split('');
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                if (arr.join('') === sb) return true;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        // Try swapping any two positions in sb to get sa
        arr = sb.split('');
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                if (arr.join('') === sa) return true;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        return false;
    };

    let n = nums.length, count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (almostEqual(nums[i], nums[j])) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countPairs([3,12,30,17,21]));
console.log(countPairs([1,1,1,1,1]));
console.log(countPairs([123,231]));
