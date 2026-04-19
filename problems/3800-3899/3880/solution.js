/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let last1 = -1;
    let last2 = -1;
    let minDiff = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (last2 !== -1) {
                minDiff = Math.min(minDiff, i - last2);
            }
            last1 = i;
        } else if (nums[i] === 2) {
            if (last1 !== -1) {
                minDiff = Math.min(minDiff, i - last1);
            }
            last2 = i;
        }
    }

    return minDiff === Infinity ? -1 : minDiff;
};

// TEST:
console.log(minAbsoluteDifference([1, 0, 0, 2, 0, 1])); // Expected: 2
console.log(minAbsoluteDifference([1, 0, 1, 0])); // Expected: -1
console.log(minAbsoluteDifference([2, 0, 1])); // Expected: 2
console.log(minAbsoluteDifference([1, 2])); // Expected: 1
console.log(minAbsoluteDifference([2, 1])); // Expected: 1
