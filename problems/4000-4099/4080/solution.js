/*
 * @lc app=leetcode.cn id=4080 lang=javascript
 *
 * [4080] 设计公交车座位预订系统
 */

// @lc code=start
/**
 * @param {number} n
 */
var BusBooking = function(n) {
  this.cost = new Map();
  this.total = 0;
  this.count = 0;
};

/**
 * @param {string} seat
 * @return {void}
 */
BusBooking.prototype.toggle = function(seat) {
  const letter = seat[0];
  const row = seat.slice(1);
  const key = letter + row;
  const cost = this.cost;
  if (cost.has(key)) {
    this.total -= cost.get(key);
    cost.delete(key);
    this.count--;
  } else {
    let c = 1;
    if (letter === 'A' && cost.has('B' + row)) c = 3;
    else if (letter === 'D' && cost.has('C' + row)) c = 3;
    cost.set(key, c);
    this.total += c;
    this.count++;
  }
};

/**
 * @return {number}
 */
BusBooking.prototype.getTotalTime = function() {
  return this.total;
};

/**
 * @return {number}
 */
BusBooking.prototype.getMinTime = function() {
  return this.count;
};

/**
 * Your BusBooking object will be instantiated and called as such:
 * var obj = new BusBooking(n)
 * obj.toggle(seat)
 * var param_2 = obj.getTotalTime()
 * var param_3 = obj.getMinTime()
 */
// @lc code=end

// TEST:
const b1 = new BusBooking(20);
b1.toggle('B3'); b1.toggle('A3');
console.log(b1.getTotalTime() === 4 && b1.getMinTime() === 2);
b1.toggle('C3'); b1.toggle('D3');
console.log(b1.getTotalTime() === 8 && b1.getMinTime() === 4);

const b2 = new BusBooking(10);
b2.toggle('C7'); b2.toggle('D7');
console.log(b2.getTotalTime() === 4);
b2.toggle('D7'); b2.toggle('C7'); b2.toggle('D7');
console.log(b2.getTotalTime() === 1 && b2.getMinTime() === 1);

const b3 = new BusBooking(1);
console.log(b3.getTotalTime() === 0 && b3.getMinTime() === 0);
b3.toggle('A1');
console.log(b3.getTotalTime() === 1);
b3.toggle('B1'); b3.toggle('B1'); b3.toggle('A1');
console.log(b3.getTotalTime() === 0 && b3.getMinTime() === 0);
b3.toggle('B1'); b3.toggle('A1');
console.log(b3.getTotalTime() === 4);
b3.toggle('B1'); b3.toggle('A1');
console.log(b3.getTotalTime() === 0);
