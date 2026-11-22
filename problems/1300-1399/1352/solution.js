/*
 * @lc app=leetcode.cn id=1352 lang=javascript
 *
 * [1352] 最后 K 个数的乘积
 */

// @lc code=start

var ProductOfNumbers = function() {
    // pre[i] = 前 i 个数的乘积, pre[0] = 1; 遇 0 时清空重建
    this.pre = [1];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.pre = [1];
    } else {
        this.pre.push(this.pre[this.pre.length - 1] * num);
    }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    const n = this.pre.length;
    if (k >= n) return 0; // 区间内含 0
    return this.pre[n - 1] / this.pre[n - 1 - k];
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
// @lc code=end

// TEST:
const assert = require('assert');

// 用例 1: 题目示例（含 0 重置）
{
    const p = new ProductOfNumbers();
    [3, 0, 2, 5, 4].forEach((x) => p.add(x));
    assert.strictEqual(p.getProduct(2), 20);
    assert.strictEqual(p.getProduct(3), 40);
    assert.strictEqual(p.getProduct(4), 0); // 跨越 0
    p.add(8);
    assert.strictEqual(p.getProduct(2), 32);
}

// 用例 2: 无 0 的纯乘法
{
    const p = new ProductOfNumbers();
    [2, 3, 4].forEach((x) => p.add(x));
    assert.strictEqual(p.getProduct(1), 4);
    assert.strictEqual(p.getProduct(2), 12);
    assert.strictEqual(p.getProduct(3), 24);
}

// 用例 3: 开头是 0，之后正常
{
    const p = new ProductOfNumbers();
    p.add(0);
    p.add(7);
    p.add(6);
    assert.strictEqual(p.getProduct(1), 6);
    assert.strictEqual(p.getProduct(2), 42);
    assert.strictEqual(p.getProduct(3), 0); // 覆盖开头 0
}

// 用例 4: 连续多个 0
{
    const p = new ProductOfNumbers();
    p.add(1);
    p.add(0);
    p.add(0);
    p.add(5);
    assert.strictEqual(p.getProduct(1), 5);
    assert.strictEqual(p.getProduct(2), 0);
    assert.strictEqual(p.getProduct(3), 0);
}

// 用例 5: add(1) 恒等与 num=1 边界
{
    const p = new ProductOfNumbers();
    p.add(1);
    assert.strictEqual(p.getProduct(1), 1);
    p.add(1);
    p.add(100);
    assert.strictEqual(p.getProduct(3), 100);
    assert.strictEqual(p.getProduct(2), 100);
    assert.strictEqual(p.getProduct(1), 100);
}

// 用例 6: 大数据量模拟（性能冒烟，10^4 次 add/getProduct，乘积保持在 32 位范围内）
{
    const p = new ProductOfNumbers();
    for (let i = 0; i < 10000; i++) p.add(1);
    assert.strictEqual(p.getProduct(1), 1);
    assert.strictEqual(p.getProduct(9999), 1);
    assert.strictEqual(p.getProduct(10000), 1);
    p.add(0);
    p.add(2);
    assert.strictEqual(p.getProduct(1), 2);
    assert.strictEqual(p.getProduct(10001), 0);
}

console.log('all tests passed');
