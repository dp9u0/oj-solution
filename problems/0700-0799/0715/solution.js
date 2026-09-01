/*
 * @lc app=leetcode id=715 lang=javascript
 *
 * [715] Range Module
 */

// @lc code=start
var RangeModule = function() {
  this.l = [];
  this.r = [];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
  const { l, r } = this;
  const L = [];
  const R = [];
  let nl = left;
  let nr = right;
  for (let i = 0; i < l.length; i++) {
    if (r[i] < left || l[i] > right) {
      L.push(l[i]);
      R.push(r[i]);
    } else {
      nl = Math.min(nl, l[i]);
      nr = Math.max(nr, r[i]);
    }
  }
  let pos = L.findIndex((v) => v > nl);
  if (pos === -1) pos = L.length;
  L.splice(pos, 0, nl);
  R.splice(pos, 0, nr);
  this.l = L;
  this.r = R;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
  const { l, r } = this;
  let lo = 0;
  let hi = l.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (r[mid] <= left) lo = mid + 1;
    else hi = mid - 1;
  }
  return lo < l.length && l[lo] <= left && right <= r[lo];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
  const { l, r } = this;
  const L = [];
  const R = [];
  for (let i = 0; i < l.length; i++) {
    if (r[i] <= left || l[i] >= right) {
      L.push(l[i]);
      R.push(r[i]);
      continue;
    }
    if (l[i] < left) {
      L.push(l[i]);
      R.push(left);
    }
    if (r[i] > right) {
      L.push(right);
      R.push(r[i]);
    }
  }
  this.l = L;
  this.r = R;
};
// @lc code=end

// TEST:
const rm = new RangeModule();
rm.addRange(10, 20);
rm.removeRange(14, 16);
console.log(rm.queryRange(10, 14) === true);
console.log(rm.queryRange(13, 15) === false);
console.log(rm.queryRange(16, 17) === true);
const rm2 = new RangeModule();
rm2.addRange(1, 5);
rm2.addRange(6, 8);
rm2.removeRange(3, 7);
console.log(rm2.queryRange(1, 3) === true);
console.log(rm2.queryRange(4, 5) === false);
console.log(rm2.queryRange(7, 8) === true);
rm2.addRange(2, 9);
console.log(rm2.queryRange(1, 10) === false);
console.log(rm2.queryRange(1, 9) === true);
