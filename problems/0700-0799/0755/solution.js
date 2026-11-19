/*
 * @lc app=leetcode.cn id=755 lang=javascript
 *
 * [755] 倒水
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @param {number} volume
 * @param {number} k
 * @return {number[]}
 */
var pourWater = function(heights, volume, k) {
    const h = heights.slice();
    const n = h.length;
    // one droplet: find leftmost strictly lower reachable point, else right, else stay
    for (let v = 0; v < volume; v++) {
        let pos = k;
        // walk left over non-increasing heights, remember best (lowest) spot
        let best = k, i = k - 1;
        while (i >= 0 && h[i] <= h[i + 1]) {
            if (h[i] < h[best]) best = i;
            i--;
        }
        if (best === pos) {
            // try right
            best = k;
            i = k + 1;
            while (i < n && h[i] <= h[i - 1]) {
                if (h[i] < h[best]) best = i;
                i++;
            }
        }
        h[best]++;
    }
    return h;
};
// @lc code=end

// TEST:
console.log(pourWater([2,1,1,2,1,2,2], 4, 3)); // [2,2,2,3,2,2,2]
console.log(pourWater([1,2,3,4], 2, 2)); // [2,3,3,4]
console.log(pourWater([3,1,3], 5, 1)); // [4,4,4]
console.log(pourWater([1,2,3,4], 0, 2)); // [1,2,3,4] (no water)
console.log(pourWater([2,2,2], 3, 1)); // [3,3,3] (stack at k, then left lowest, then right)
console.log(pourWater([5,4,3,2,1], 3, 2)); // [5,4,3,3,3] (rightmost drop fills idx4 then idx3, then slides over equal to idx4)
console.log(pourWater([9], 4, 0)); // [13]
