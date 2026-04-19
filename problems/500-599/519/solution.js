/*
 * @lc app=leetcode id=519 lang=javascript
 *
 * [519] Random Flip Matrix
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function(m, n) {
    this.m = m;
    this.n = n;
    this.total = m * n;
    this.size = this.total;
    this.map = new Map();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    const r = Math.floor(Math.random() * this.size);
    const idx = this.map.get(r) ?? r;
    this.map.set(r, this.map.get(this.size - 1) ?? (this.size - 1));
    this.size--;
    return [Math.floor(idx / this.n), idx % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    this.size = this.total;
    this.map.clear();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
// @lc code=end

// TEST:
const sol = new Solution(3, 1);
const results = new Set();
for (let i = 0; i < 3; i++) {
    const pos = sol.flip();
    console.log(pos.length === 2 && pos[0] >= 0 && pos[0] < 3 && pos[1] === 0);
    results.add(pos[0]);
}
console.log(results.size === 3);
sol.reset();
const pos = sol.flip();
console.log(pos.length === 2 && pos[0] >= 0 && pos[0] < 3 && pos[1] === 0);

const sol2 = new Solution(1, 2);
const p1 = sol2.flip();
const p2 = sol2.flip();
console.log((p1[0] === 0 && p1[1] >= 0 && p1[1] < 2) && (p2[0] === 0 && p2[1] >= 0 && p2[1] < 2));
