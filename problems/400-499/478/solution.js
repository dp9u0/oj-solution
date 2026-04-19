/*
 * @lc app=leetcode id=478 lang=javascript
 *
 * [478] Generate Random Point in a Circle
 */

// @lc code=start
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.r = radius;
    this.cx = x_center;
    this.cy = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    const angle = Math.random() * 2 * Math.PI;
    const r = this.r * Math.sqrt(Math.random());
    return [this.cx + r * Math.cos(angle), this.cy + r * Math.sin(angle)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
// @lc code=end

// TEST:
const sol = new Solution(1.0, 0.0, 0.0);
for (let i = 0; i < 5; i++) {
    const [x, y] = sol.randPoint();
    console.log(x * x + y * y <= 1.0001);
}

const sol2 = new Solution(10.0, 5.0, -3.0);
for (let i = 0; i < 3; i++) {
    const [x, y] = sol2.randPoint();
    console.log((x - 5) * (x - 5) + (y + 3) * (y + 3) <= 100.0001);
}
