/*
 * @lc app=leetcode id=911 lang=javascript
 *
 * [911] Online Election
 */

// @lc code=start
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    this.times = times;
    this.leads = [];
    const count = {};
    let maxCount = 0;
    let leader = -1;

    for (const p of persons) {
        count[p] = (count[p] || 0) + 1;
        if (count[p] >= maxCount) {
            maxCount = count[p];
            leader = p;
        }
        this.leads.push(leader);
    }
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    let lo = 0, hi = this.times.length - 1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (this.times[mid] <= t) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return this.leads[hi];
};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// @lc code=end

// TEST:
var obj = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
console.log(obj.q(3));  // 0
console.log(obj.q(12)); // 1
console.log(obj.q(25)); // 1
console.log(obj.q(15)); // 0
console.log(obj.q(24)); // 0
console.log(obj.q(8));  // 1
