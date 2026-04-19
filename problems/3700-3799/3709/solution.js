/*
 * @lc app=leetcode id=3709 lang=javascript
 *
 * [3709] Design Exam Scores Tracker
 */

// @lc code=start

var ExamTracker = function() {
    this.times = [];
    this.prefixSum = [0];
};

/**
 * @param {number} time
 * @param {number} score
 * @return {void}
 */
ExamTracker.prototype.record = function(time, score) {
    this.times.push(time);
    this.prefixSum.push(this.prefixSum[this.prefixSum.length - 1] + score);
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
ExamTracker.prototype.totalScore = function(startTime, endTime) {
    const bs = (target, upper) => {
        let lo = 0, hi = this.times.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (upper ? this.times[mid] <= target : this.times[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };
    const left = bs(startTime, false);
    const right = bs(endTime, true);
    return this.prefixSum[right] - this.prefixSum[left];
};

/**
 * Your ExamTracker object will be instantiated and called as such:
 * var obj = new ExamTracker()
 * obj.record(time,score)
 * var param_2 = obj.totalScore(startTime,endTime)
 */
// @lc code=end

// TEST:
const et = new ExamTracker();
et.record(1, 98);
console.log(et.totalScore(1, 1));   // 98
et.record(5, 99);
console.log(et.totalScore(1, 3));   // 98
console.log(et.totalScore(1, 5));   // 197
console.log(et.totalScore(3, 4));   // 0
console.log(et.totalScore(2, 5));   // 99
et.record(10, 100);
console.log(et.totalScore(1, 10));  // 297
