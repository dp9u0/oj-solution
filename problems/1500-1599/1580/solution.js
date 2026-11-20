/*
 * @lc app=leetcode.cn id=1580 lang=javascript
 *
 * [1580] 把箱子放进仓库里 II
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function(boxes, warehouse) {
    boxes.sort((a, b) => b - a); // tallest first
    let l = 0, r = warehouse.length - 1, count = 0;
    for (const b of boxes) {
        if (l > r) break;
        if (warehouse[l] >= b) { // push from the left into room l
            count++;
            l++;
        } else if (warehouse[r] >= b) { // push from the right into room r
            count++;
            r--;
        }
        // both extremes too short: no middle room is reachable either, skip box
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxBoxesInWarehouse([1,2,2,3,4], [3,4,1,2])); // 4
console.log(maxBoxesInWarehouse([3,5,5,2], [2,1,3,4,5])); // 3
console.log(maxBoxesInWarehouse([1,2,3], [1,2,3,4])); // 3
console.log(maxBoxesInWarehouse([4,5,6], [3,3,3,3,3])); // 0
