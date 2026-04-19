/*
 * @lc app=leetcode id=2102 lang=javascript
 *
 * [2102] Sequentially Ordinal Rank Tracker
 */

// @lc code=start
/**
 * SORTracker class
 */
var SORTracker = function() {
  this.locs = [];
  this.k = 0;
};

const bisect = (arr, score, name) => {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const [s, n] = arr[mid];
    if (s > score || (s === score && n < name)) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};

SORTracker.prototype.add = function(name, score) {
  const pos = bisect(this.locs, score, name);
  this.locs.splice(pos, 0, [score, name]);
};

SORTracker.prototype.get = function() {
  return this.locs[this.k++][1];
};
// @lc code=end

// TEST:
var t = new SORTracker();
t.add("bradford", 2);
t.add("branford", 3);
console.log(t.get() === "branford");
t.add("alps", 2);
console.log(t.get() === "alps");
t.add("orland", 2);
console.log(t.get() === "bradford");
t.add("orlando", 3);
console.log(t.get() === "bradford");
t.add("alpine", 2);
console.log(t.get() === "bradford");
console.log(t.get() === "orland");

var t2 = new SORTracker();
t2.add("a", 5);
t2.add("b", 3);
console.log(t2.get() === "a");
console.log(t2.get() === "b");

var t3 = new SORTracker();
t3.add("zzz", 1);
t3.add("aaa", 1);
t3.add("mmm", 1);
console.log(t3.get() === "aaa");
console.log(t3.get() === "mmm");
console.log(t3.get() === "zzz");
