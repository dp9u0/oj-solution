/*
 * @lc app=leetcode id=2349 lang=javascript
 *
 * [2349] Design a Number Container System
 */

// @lc code=start

var NumberContainers = function() {
  this.indexToNum = new Map();
  this.numToHeap = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
  this.indexToNum.set(index, number);
  if (!this.numToHeap.has(number)) {
    this.numToHeap.set(number, []);
  }
  const heap = this.numToHeap.get(number);
  heap.push(index);
  let i = heap.length - 1;
  while (i > 0) {
    const p = (i - 1) >> 1;
    if (heap[p] <= heap[i]) break;
    [heap[p], heap[i]] = [heap[i], heap[p]];
    i = p;
  }
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
  const heap = this.numToHeap.get(number);
  if (!heap) return -1;
  while (heap.length > 0) {
    const top = heap[0];
    if (this.indexToNum.get(top) === number) return top;
    // pop
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let m = i;
        const l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l] < heap[m]) m = l;
        if (r < heap.length && heap[r] < heap[m]) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]];
        i = m;
      }
    }
  }
  return -1;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
// @lc code=end

// TEST:
const nc = new NumberContainers();
console.log(nc.find(10)); // -1
nc.change(2, 10);
nc.change(1, 10);
nc.change(3, 10);
nc.change(5, 10);
console.log(nc.find(10)); // 1
nc.change(1, 20);
console.log(nc.find(10)); // 2
console.log(nc.find(20)); // 1
nc.change(1, 30);
console.log(nc.find(20)); // -1
