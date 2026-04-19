/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let total = 0;
    for (const [count, units] of boxTypes) {
        const take = Math.min(count, truckSize);
        total += take * units;
        truckSize -= take;
        if (truckSize === 0) break;
    }
    return total;
};
// @lc code=end

// TEST:
console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));                  // 8
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));          // 91
console.log(maximumUnits([[1,1],[2,2],[3,3]], 2));                  // 6
