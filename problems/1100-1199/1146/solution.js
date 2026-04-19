/*
 * @lc app=leetcode id=1146 lang=javascript
 *
 * [1146] Snapshot Array
 */

// @lc code=start
/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.snapCount = 0;
  this.history = Array.from({ length }, () => [[-1, 0]]);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  const h = this.history[index];
  if (h[h.length - 1][0] === this.snapCount) {
    h[h.length - 1][1] = val;
  } else {
    h.push([this.snapCount, val]);
  }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snapCount++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const h = this.history[index];
  let lo = 0, hi = h.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (h[mid][0] <= snap_id) lo = mid;
    else hi = mid - 1;
  }
  return h[lo][1];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end

// TEST:
const obj = new SnapshotArray(3);
obj.set(0, 5);
console.log(obj.snap()); // 0
obj.set(0, 6);
console.log(obj.get(0, 0)); // 5
console.log(obj.get(0, 0)); // 5
obj.set(1, 10);
console.log(obj.snap()); // 1
console.log(obj.get(1, 1)); // 10
console.log(obj.get(1, 0)); // 0
console.log(obj.get(2, 0)); // 0
