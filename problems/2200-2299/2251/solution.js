/*
 * @lc app=leetcode id=2251 lang=javascript
 *
 * [2251] Number of Flowers in Full Bloom
 */

// @lc code=start
/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    const starts = flowers.map(f => f[0]).sort((a, b) => a - b);
    const ends = flowers.map(f => f[1]).sort((a, b) => a - b);

    const upperBound = (arr, target) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] <= target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const lowerBound = (arr, target) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    return people.map(t => upperBound(starts, t) - lowerBound(ends, t));
};
// @lc code=end

// TEST:
console.log(JSON.stringify(fullBloomFlowers([[1,6],[3,7],[9,12],[4,13]], [2,3,7,11]))); // [1,2,2,2]
console.log(JSON.stringify(fullBloomFlowers([[1,10],[3,3]], [3,3,2])));                 // [2,2,1]
