/*
 * @lc app=leetcode.cn id=1570 lang=javascript
 *
 * [1570] 两个稀疏向量的点积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.pairs = []; // [index, value], indices ascending
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) this.pairs.push([i, nums[i]]);
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    const a = this.pairs, b = vec.pairs;
    let sum = 0, i = 0, j = 0;
    while (i < a.length && j < b.length) {
        if (a[i][0] === b[j][0]) {
            sum += a[i][1] * b[j][1];
            i++;
            j++;
        } else if (a[i][0] < b[j][0]) {
            i++;
        } else {
            j++;
        }
    }
    return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
// @lc code=end

// TEST:
console.log(new SparseVector([1,0,0,2,3]).dotProduct(new SparseVector([0,3,0,4,0]))); // 8
console.log(new SparseVector([0,1,0,0,0]).dotProduct(new SparseVector([0,0,0,0,2]))); // 0
console.log(new SparseVector([0,1,0,0,2,0,0]).dotProduct(new SparseVector([1,0,0,0,3,0,4]))); // 6
