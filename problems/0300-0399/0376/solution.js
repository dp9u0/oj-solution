/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    
    let up = 1;
    let down = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1;
        } else if (nums[i] < nums[i - 1]) {
            down = up + 1;
        }
    }
    
    return Math.max(up, down);
};

module.exports = wiggleMaxLength;

// TEST:
console.log(wiggleMaxLength([1,7,4,9,2,5])); // 6
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])); // 7
console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9])); // 2
