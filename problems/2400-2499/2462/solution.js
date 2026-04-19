/*
 * @lc app=leetcode id=2462 lang=javascript
 *
 * [2462] Total Cost to Hire K Workers
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
  const n = costs.length;
  let left = 0;
  let right = n - 1;

  // Simple MinHeap: [cost, index], compare by cost then index
  class MinHeap {
    constructor() { this.data = []; }
    push(val) {
      this.data.push(val);
      let i = this.data.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (this._less(this.data[i], this.data[p])) {
          [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
          i = p;
        } else break;
      }
    }
    pop() {
      const top = this.data[0];
      const last = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = last;
        let i = 0;
        while (true) {
          let s = i;
          const l = 2 * i + 1, r = 2 * i + 2;
          if (l < this.data.length && this._less(this.data[l], this.data[s])) s = l;
          if (r < this.data.length && this._less(this.data[r], this.data[s])) s = r;
          if (s !== i) { [this.data[i], this.data[s]] = [this.data[s], this.data[i]]; i = s; }
          else break;
        }
      }
      return top;
    }
    peek() { return this.data[0]; }
    get size() { return this.data.length; }
    _less(a, b) { return a[0] !== b[0] ? a[0] < b[0] : a[1] < b[1]; }
  }

  const leftHeap = new MinHeap();
  const rightHeap = new MinHeap();

  for (let i = 0; i < candidates && left <= right; i++) {
    leftHeap.push([costs[left], left++]);
  }
  for (let i = 0; i < candidates && left <= right; i++) {
    rightHeap.push([costs[right], right--]);
  }

  let result = 0;

  for (let i = 0; i < k; i++) {
    const leftMin = leftHeap.size ? leftHeap.peek()[0] : Infinity;
    const rightMin = rightHeap.size ? rightHeap.peek()[0] : Infinity;

    if (leftMin <= rightMin) {
      result += leftHeap.pop()[0];
      if (left <= right) leftHeap.push([costs[left], left++]);
    } else {
      result += rightHeap.pop()[0];
      if (left <= right) rightHeap.push([costs[right], right--]);
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(totalCost([17,12,10,2,7,2,11,20,8], 3, 4)); // 11
console.log(totalCost([1,2,4,1], 3, 3)); // 4
