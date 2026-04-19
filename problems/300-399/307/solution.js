/*
 * @lc app=leetcode id=307 lang=javascript
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.n = nums.length;
    // 初始化二叉索引树
    this.tree = new Array(this.n + 1).fill(0);
    
    // 构建二叉索引树
    for (let i = 0; i < this.n; i++) {
        this.updateBIT(i + 1, nums[i]);
    }
};

NumArray.prototype.updateBIT = function(index, diff) {
    while (index <= this.n) {
        this.tree[index] += diff;
        index += index & (-index); // 获取下一个需要更新的索引
    }
};

NumArray.prototype.getSum = function(index) {
    let sum = 0;
    while (index > 0) {
        sum += this.tree[index];
        index -= index & (-index); // 获取父节点
    }
    return sum;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    const diff = val - this.nums[index];
    this.nums[index] = val;
    this.updateBIT(index + 1, diff);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.getSum(right + 1) - this.getSum(left);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

// TEST:
function runTests() {
    // 测试用例1: 题目中的示例
    console.log("Test Case 1:");
    let numArray1 = new NumArray([1, 3, 5]);
    console.log(numArray1.sumRange(0, 2)); // 应该返回 9
    numArray1.update(1, 2);
    console.log(numArray1.sumRange(0, 2)); // 应该返回 8

    // 测试用例2: 单个元素的数组
    console.log("\nTest Case 2:");
    let numArray2 = new NumArray([1]);
    console.log(numArray2.sumRange(0, 0)); // 应该返回 1
    numArray2.update(0, 10);
    console.log(numArray2.sumRange(0, 0)); // 应该返回 10

    // 测试用例3: 较大的数组
    console.log("\nTest Case 3:");
    let numArray3 = new NumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(numArray3.sumRange(2, 5)); // 应该返回 18 (3+4+5+6)
    numArray3.update(4, 10);
    console.log(numArray3.sumRange(2, 5)); // 应该返回 23 (3+4+10+6)

    // 测试用例4: 负数
    console.log("\nTest Case 4:");
    let numArray4 = new NumArray([-1, -2, -3, -4, -5]);
    console.log(numArray4.sumRange(1, 3)); // 应该返回 -9 (-2+-3+-4)
    numArray4.update(2, 0);
    console.log(numArray4.sumRange(1, 3)); // 应该返回 -6 (-2+0+-4)
}

// 运行测试
runTests();
