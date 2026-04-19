/*
 * @lc app=leetcode id=2336 lang=javascript
 *
 * [2336] Smallest Number in Infinite Set
 */

// @lc code=start

var SmallestInfiniteSet = function() {
    this.next = 1;
    this.heap = [];
    this.inHeap = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.heap.length > 0) {
        const val = this.heap.shift();
        this.inHeap.delete(val);
        return val;
    }
    return this.next++;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.next && !this.inHeap.has(num)) {
        this.inHeap.add(num);
        this.heap.push(num);
        this.heap.sort((a, b) => a - b);
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
// @lc code=end
