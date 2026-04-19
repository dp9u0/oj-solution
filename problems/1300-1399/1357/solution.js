/*
 * @lc app=leetcode id=1357 lang=javascript
 *
 * [1357] Apply Discount Every n Orders
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
  this.n = n;
  this.discount = discount;
  this.priceMap = new Map();
  for (let i = 0; i < products.length; i++) {
    this.priceMap.set(products[i], prices[i]);
  }
  this.count = 0;
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
  this.count++;
  let bill = 0;
  for (let i = 0; i < product.length; i++) {
    bill += amount[i] * this.priceMap.get(product[i]);
  }
  if (this.count % this.n === 0) {
    bill = bill * (100 - this.discount) / 100;
  }
  return bill;
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
// @lc code=end

// TEST:
const cashier = new Cashier(3, 50, [1,2,3,4,5,6,7], [100,200,300,400,300,200,100]);
console.log(cashier.getBill([1,2], [1,2])); // 500.0
console.log(cashier.getBill([3,7], [10,10])); // 4000.0
console.log(cashier.getBill([1,2,3,4,5,6,7], [1,1,1,1,1,1,1])); // 800.0
console.log(cashier.getBill([4], [10])); // 4000.0
console.log(cashier.getBill([7,5,3,1,6,4,2], [10,10,10,9,9,9,7])); // 7350.0
