/*
 * @lc app=leetcode id=1865 lang=javascript
 *
 * [1865] Finding Pairs With a Certain Sum
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freq = new Map();
    for (const v of nums2) {
        this.freq.set(v, (this.freq.get(v) || 0) + 1);
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const old = this.nums2[index];
    this.freq.set(old, this.freq.get(old) - 1);
    const newVal = old + val;
    this.nums2[index] = newVal;
    this.freq.set(newVal, (this.freq.get(newVal) || 0) + 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let cnt = 0;
    for (const v of this.nums1) {
        cnt += (this.freq.get(tot - v) || 0);
    }
    return cnt;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
// @lc code=end

// TEST:
var obj = new FindSumPairs([1,1,2,2,2,3], [1,4,5,2,5,4]);
console.log(obj.count(7));   // 8
obj.add(3, 2);
console.log(obj.count(8));   // 2
console.log(obj.count(4));   // 1
obj.add(0, 1);
obj.add(1, 1);
console.log(obj.count(7));   // 11
