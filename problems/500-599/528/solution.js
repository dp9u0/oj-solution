/*
 * @lc app=leetcode id=528 lang=javascript
 *
 * [528] Random Pick with Weight
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefix = [];
    let sum = 0;
    for (const x of w) {
        sum += x;
        this.prefix.push(sum);
    }
    this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const r = Math.floor(Math.random() * this.total) + 1;
    let lo = 0, hi = this.prefix.length - 1;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (this.prefix[mid] < r) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

// TEST:
const s1 = new Solution([1]);
console.log(s1.pickIndex()); // 0

const s2 = new Solution([1, 3]);
const counts = [0, 0];
for (let i = 0; i < 10000; i++) counts[s2.pickIndex()]++;
console.log(counts[0] > 2000 && counts[0] < 3000); // true (~2500)
console.log(counts[1] > 7000 && counts[1] < 8000); // true (~7500)

const s3 = new Solution([3, 1, 2]);
const c3 = [0, 0, 0];
for (let i = 0; i < 60000; i++) c3[s3.pickIndex()]++;
console.log(c3[0] > 27000 && c3[0] < 33000); // true (~30000)
console.log(c3[1] > 7000 && c3[1] < 13000); // true (~10000)
console.log(c3[2] > 17000 && c3[2] < 23000); // true (~20000)
