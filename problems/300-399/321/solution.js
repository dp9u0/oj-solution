/*
 * @lc app=leetcode id=321 lang=javascript
 *
 * [321] Create Maximum Number
 */

// @lc code=start
/**
 * 从单个数组中选择指定数量的数字，保持相对顺序并使结果最大
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number[]}
 */
const selectMaxFromArray = (nums, k) => {
    const stack = [];
    const n = nums.length;
    // 需要移除的数字个数
    let drop = n - k;
    
    for (const num of nums) {
        // 当stack不为空，且还可以移除数字，且当前数字大于栈顶数字时
        while (stack.length && drop > 0 && num > stack[stack.length - 1]) {
            stack.pop();
            drop--;
        }
        stack.push(num);
    }
    
    // 如果还需要移除数字，从末尾移除
    return stack.slice(0, k);
};

/**
 * 合并两个数组，使得结果最大
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @return {number[]}
 */
const merge = (nums1, nums2) => {
    const result = [];
    while (nums1.length || nums2.length) {
        // 选择较大的数组作为当前的选择
        const arr = compare(nums1, nums2) > 0 ? nums1 : nums2;
        result.push(arr.shift());
    }
    return result;
};

/**
 * 比较两个数组，返回较大的数组
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @return {number} 1 if nums1 > nums2, -1 if nums1 < nums2, 0 if equal
 */
const compare = (nums1, nums2) => {
    for (let i = 0; i < nums1.length && i < nums2.length; i++) {
        if (nums1[i] !== nums2[i]) {
            return nums1[i] - nums2[i];
        }
    }
    return nums1.length - nums2.length;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const result = new Array(k).fill(0);
    
    // 枚举从nums1中选择的数字个数
    for (let i = Math.max(0, k - n2); i <= Math.min(k, n1); i++) {
        // nums2中需要选择k-i个数字
        const candidate = merge(
            selectMaxFromArray(nums1, i),
            selectMaxFromArray(nums2, k - i)
        );
        
        // 更新结果
        if (compare([...candidate], [...result]) > 0) {
            result.splice(0, k, ...candidate);
        }
    }
    
    return result;
};
// @lc code=end
// TEST: 
console.log(maxNumber([3,4,6,5], [9,1,2,5,8,3], 5));
console.log(maxNumber([6,7], [6,0,4], 5));
console.log(maxNumber([3,9], [8,9], 3));
console.log(maxNumber([1,2,3,4,5], [6,7,8,9,10], 5));
console.log(maxNumber([1,2,3,4,5], [6,7,8,9,10], 10));
console.log(maxNumber([1,2,3,4,5], [6,7,8,9,10], 1));
console.log(maxNumber([1,2,3,4,5], [6,7,8,9,10], 0));
console.log(maxNumber([1,2,3,4,5], [6,7,8,9,10], 100));
