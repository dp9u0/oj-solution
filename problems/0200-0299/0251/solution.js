/*
 * @lc app=leetcode.cn id=251 lang=javascript
 *
 * [251] 展开二维向量
 */

// @lc code=start
/**
 * @param {number[][]} vec
 */
var Vector2D = function(vec) {
    this.vec = vec;
    this.row = 0;
    this.col = 0;
};

// skip exhausted (or empty) inner rows
Vector2D.prototype.advance = function() {
    while (this.row < this.vec.length && this.col >= this.vec[this.row].length) {
        this.row++;
        this.col = 0;
    }
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    this.advance();
    return this.vec[this.row][this.col++];
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    this.advance();
    return this.row < this.vec.length;
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
// TEST:
const iterate = vec => {
    const it = new Vector2D(vec);
    const out = [];
    while (it.hasNext()) out.push(it.next());
    return out;
};
console.log(iterate([[1, 2], [3], [4], [], []])); // [1,2,3,4]
console.log(iterate([[]])); // []
console.log(iterate([[], [], [5]])); // [5]
console.log(iterate([])); // []
console.log(iterate([[1, 2, 3]])); // [1,2,3]
