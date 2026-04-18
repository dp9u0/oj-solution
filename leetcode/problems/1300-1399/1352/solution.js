/*
 * @lc app=leetcode id=1352 lang=javascript
 *
 * [1352] Product of the Last K Numbers
 */

// @lc code=start

var ProductOfNumbers = function() {
    this.prod = [1];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.prod = [1];
    } else {
        this.prod.push(this.prod[this.prod.length - 1] * num);
    }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (k >= this.prod.length) return 0;
    return this.prod[this.prod.length - 1] / this.prod[this.prod.length - 1 - k];
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
// @lc code=end

// TEST:
var obj = new ProductOfNumbers();
obj.add(3);
obj.add(0);
obj.add(2);
obj.add(5);
obj.add(4);
console.log(obj.getProduct(2)); // 20
console.log(obj.getProduct(3)); // 40
console.log(obj.getProduct(4)); // 0
obj.add(8);
console.log(obj.getProduct(2)); // 32

var obj2 = new ProductOfNumbers();
obj2.add(1);
obj2.add(2);
obj2.add(3);
obj2.add(4);
console.log(obj2.getProduct(4)); // 24
console.log(obj2.getProduct(1)); // 4
