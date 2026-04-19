/*
 * @lc app=leetcode id=2671 lang=javascript
 *
 * [2671] Frequency Tracker
 */

// @lc code=start

var FrequencyTracker = function() {
  this.cnt = {};
  this.freq = {};
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
  const old = this.cnt[number] || 0;
  if (old > 0) this.freq[old]--;
  this.cnt[number] = old + 1;
  this.freq[old + 1] = (this.freq[old + 1] || 0) + 1;
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
  const old = this.cnt[number] || 0;
  if (old === 0) return;
  this.freq[old]--;
  this.cnt[number] = old - 1;
  if (old - 1 > 0) {
    this.freq[old - 1] = (this.freq[old - 1] || 0) + 1;
  }
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
  return (this.freq[frequency] || 0) > 0;
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
// @lc code=end

// TEST:
const ft = new FrequencyTracker();
ft.add(3);
ft.add(3);
console.log(ft.hasFrequency(2)); // true
console.log(ft.hasFrequency(1)); // false

const ft2 = new FrequencyTracker();
ft2.add(1);
ft2.deleteOne(1);
console.log(ft2.hasFrequency(1)); // false

const ft3 = new FrequencyTracker();
console.log(ft3.hasFrequency(2)); // false
ft3.add(3);
console.log(ft3.hasFrequency(1)); // true
