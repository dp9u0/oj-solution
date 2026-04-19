/**
 * @param {number[]} nums
 * @param {number[]} colors
 * @return {number}
 */
var rob = function(nums, colors) {
    const n = nums.length;
    if (n === 0) return 0;
    let prev0 = 0;
    let prev1 = nums[0];
    for (let i = 1; i < n; i++) {
        const cur0 = Math.max(prev0, prev1);
        const cur1 = (colors[i] === colors[i - 1] ? prev0 : Math.max(prev0, prev1)) + nums[i];
        prev0 = cur0;
        prev1 = cur1;
    }
    return Math.max(prev0, prev1);
};

// TEST:
console.log(rob([1, 4, 3, 5], [1, 1, 2, 2])); // 9
console.log(rob([3, 1, 2, 4], [2, 3, 2, 2])); // 8
console.log(rob([10, 1, 3, 9], [1, 1, 1, 2])); // 22
console.log(rob([5], [1])); // 5
