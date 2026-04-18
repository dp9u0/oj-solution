/*
 * @lc app=leetcode id=2069 lang=javascript
 *
 * [2069] Walking Robot Simulation II
 */

// @lc code=start
/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.w = width;
    this.h = height;
    this.perim = 2 * (width + height) - 4;
    this.initial = true;
    this.idx = 0;

    this.path = [];
    const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];
    let x = 1, y = 0, dir = 0;
    for (let i = 0; i < this.perim; i++) {
        this.path.push({ x, y, dir });
        let nx = x + dx[dir], ny = y + dy[dir];
        if (nx < 0 || nx >= width || ny < 0 || ny >= height) {
            dir = (dir + 1) % 4;
            nx = x + dx[dir];
            ny = y + dy[dir];
        }
        x = nx;
        y = ny;
    }
};

Robot.prototype.step = function(num) {
    if (this.initial) {
        this.initial = false;
        this.idx = (num - 1) % this.perim;
    } else {
        this.idx = (this.idx + num) % this.perim;
    }
};

Robot.prototype.getPos = function() {
    if (this.initial) return [0, 0];
    return [this.path[this.idx].x, this.path[this.idx].y];
};

Robot.prototype.getDir = function() {
    if (this.initial) return 'East';
    return ['East', 'North', 'West', 'South'][this.path[this.idx].dir];
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
// @lc code=end

// TEST:
const r1 = new Robot(6, 3);
r1.step(2); r1.step(2);
console.log(JSON.stringify(r1.getPos()), r1.getDir()); // [4,0] East
r1.step(2); r1.step(1); r1.step(4);
console.log(JSON.stringify(r1.getPos()), r1.getDir()); // [1,2] West

const r2 = new Robot(2, 2);
r2.step(1);
console.log(JSON.stringify(r2.getPos()), r2.getDir()); // [1,0] East
r2.step(3);
console.log(JSON.stringify(r2.getPos()), r2.getDir()); // [0,0] South

const r3 = new Robot(3, 3);
r3.step(8);
console.log(JSON.stringify(r3.getPos()), r3.getDir()); // [0,0] South

const r4 = new Robot(2, 3);
console.log(JSON.stringify(r4.getPos()), r4.getDir()); // [0,0] East
r4.step(6);
console.log(JSON.stringify(r4.getPos()), r4.getDir()); // [0,0] South
