/*
 * @lc app=leetcode.cn id=1564 lang=javascript
 *
 * [1564] 把箱子放进仓库里 I
 */

// @lc code=start
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function(boxes, warehouse) {
    boxes.sort((a, b) => a - b);
    let eff = Infinity;
    for (let i = 0; i < warehouse.length; i++) {
        eff = Math.min(eff, warehouse[i]); // tallest box room i can accept
        warehouse[i] = eff;
    }
    let count = 0, ptr = 0;
    for (let r = warehouse.length - 1; r >= 0 && ptr < boxes.length; r--) {
        if (warehouse[r] >= boxes[ptr]) { // place the smallest remaining box here
            count++;
            ptr++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxBoxesInWarehouse([4,3,4,1], [5,3,3,4,1])); // 3
console.log(maxBoxesInWarehouse([1,2,2,3,4], [3,4,1,2])); // 3
console.log(maxBoxesInWarehouse([1,2,3], [1,2,3,4])); // 1
console.log(maxBoxesInWarehouse([5], [1,2])); // 0
console.log(maxBoxesInWarehouse([1,1], [2,2])); // 2
