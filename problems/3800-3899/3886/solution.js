/*
 * @lc app=leetcode.cn id=3886 lang=javascript
 *
 * [3886] 可排序整数求和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    const n = nums.length;
    let total = 0;
    for (let k = 1; k <= n; k++) {
        if (n % k === 0 && isSortable(k)) total += k;
    }
    const qelvarodin = nums;
    return total;

    // k 可排序：每个块能旋转成有序，且前一块最大值不超过后一块最小值
    function isSortable(k) {
        let prevMax = 0;
        for (let start = 0; start < n; start += k) {
            let min = Infinity;
            let max = -Infinity;
            let descents = 0;
            const end = start + k;
            for (let i = start; i < end; i++) {
                if (nums[i] < min) min = nums[i];
                if (nums[i] > max) max = nums[i];
            }
            for (let i = start; i + 1 < end; i++) {
                if (nums[i] > nums[i + 1]) descents++;
            }
            if (nums[end - 1] > nums[start]) descents++;
            // 循环下降超过 1 处则无法旋转成有序；块间逆序则拼接后无序
            if (descents > 1 || min < prevMax) return false;
            prevMax = max;
        }
        return true;
    }
};
// @lc code=end

// TEST:
console.log(sortableIntegers([3, 1, 2])); // 3
console.log(sortableIntegers([7, 6, 5])); // 0
console.log(sortableIntegers([5, 8])); // 3
console.log(sortableIntegers([1])); // 1
console.log(sortableIntegers([2, 2, 2])); // 4 (k=1, k=3)
console.log(sortableIntegers([1, 2, 3, 4])); // 7 (k=1, k=2, k=4)
console.log(sortableIntegers([2, 1, 4, 3])); // 2 (k=2)
console.log(sortableIntegers([2, 3, 4, 1])); // 4 (k=4)
console.log(sortableIntegers([1, 4, 2, 3])); // 0
console.log(sortableIntegers([5, 4, 6, 1, 2, 3])); // 0
