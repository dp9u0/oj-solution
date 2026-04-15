/*
 * @lc app=leetcode id=3761 lang=javascript
 *
 * [3761] Minimum Absolute Distance Between Mirror Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    const reverse = (x) => {
        let rev = 0;
        while (x > 0) {
            rev = rev * 10 + x % 10;
            x = Math.floor(x / 10);
        }
        return rev;
    };

    const lastIndex = new Map();
    let minDist = Infinity;

    for (let j = 0; j < nums.length; j++) {
        if (lastIndex.has(nums[j])) {
            minDist = Math.min(minDist, j - lastIndex.get(nums[j]));
        }
        const rev = reverse(nums[j]);
        lastIndex.set(rev, j);
    }

    return minDist === Infinity ? -1 : minDist;
};
// @lc code=end

// TEST:
console.log(minMirrorPairDistance([12,21,45,33,54]));  // 1
console.log(minMirrorPairDistance([120,21]));          // 1
console.log(minMirrorPairDistance([21,120]));          // -1
console.log(minMirrorPairDistance([12,21,21,12]));     // 1
