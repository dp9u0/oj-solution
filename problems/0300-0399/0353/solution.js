/*
 * @lc app=leetcode.cn id=353 lang=javascript
 *
 * [353] 贪吃蛇
 */

// @lc code=start
/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    this.width = width;
    this.height = height;
    this.food = food;       // consumed in order via this.foodIdx
    this.foodIdx = 0;
    this.score = 0;
    // body as index queue: head at the END
    this.body = [[0, 0]];
    this.bodySet = new Set(['0,0']);
};

/**
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    const [hr, hc] = this.body[this.body.length - 1];
    const delta = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] }[direction];
    if (!delta) return -1;
    const nr = hr + delta[0], nc = hc + delta[1];

    // wall collision
    if (nr < 0 || nr >= this.height || nc < 0 || nc >= this.width) return -1;

    // eating food: tail stays, body grows
    const eating = this.foodIdx < this.food.length &&
        this.food[this.foodIdx][0] === nr && this.food[this.foodIdx][1] === nc;

    // body collision: the tail tip moves away this turn unless growing
    if (!eating) {
        const tail = this.body.shift();
        this.bodySet.delete(tail[0] + ',' + tail[1]);
    }
    if (this.bodySet.has(nr + ',' + nc)) return -1;

    this.body.push([nr, nc]);
    this.bodySet.add(nr + ',' + nc);
    if (eating) {
        this.score++;
        this.foodIdx++;
    }
    return this.score;
};

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
// @lc code=end

// TEST:
const g = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
console.log(g.move("R")); // 0
console.log(g.move("D")); // 0
console.log(g.move("R")); // 1 (eats [1,2])
console.log(g.move("U")); // 1
console.log(g.move("L")); // 2 (eats [0,1])
console.log(g.move("U")); // -1 (hits wall)
