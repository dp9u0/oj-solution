/*
 * @lc app=leetcode id=497 lang=javascript
 *
 * [497] Random Point in Non-overlapping Rectangles
 */

// @lc code=start
/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects;
    this.prefix = [];
    let sum = 0;
    for (const [a, b, x, y] of rects) {
        sum += (x - a + 1) * (y - b + 1);
        this.prefix.push(sum);
    }
    this.total = sum;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    const target = Math.floor(Math.random() * this.total) + 1;
    let lo = 0, hi = this.prefix.length - 1;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (this.prefix[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    const [a, b, x, y] = this.rects[lo];
    const px = a + Math.floor(Math.random() * (x - a + 1));
    const py = b + Math.floor(Math.random() * (y - b + 1));
    return [px, py];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
// @lc code=end

// TEST:
const sol = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);
for (let i = 0; i < 5; i++) {
    const [x, y] = sol.pick();
    const valid1 = x >= -2 && x <= 1 && y >= -2 && y <= 1;
    const valid2 = x >= 2 && x <= 4 && y >= 2 && y <= 6;
    console.log(valid1 || valid2);
}

const sol2 = new Solution([[0, 0, 0, 0]]);
console.log(JSON.stringify(sol2.pick()) === JSON.stringify([0, 0]));
