/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let duplicates = [];
    for (let index = 0; index < nums.length; index++) {
        let nextIndex = Math.abs(nums[index]) - 1;
        if (nums[nextIndex] < 0) {
            duplicates.push(nextIndex + 1);
        } else {
            nums[nextIndex] = -nums[nextIndex];
        }
    }
    return duplicates;
};

// TEST:
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));