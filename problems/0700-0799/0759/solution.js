/*
 * @lc app=leetcode.cn id=759 lang=javascript
 *
 * [759] 员工空闲时间
 */

// @lc code=start
/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
    const all = [];
    for (const emp of schedule) for (const iv of emp) all.push(iv);
    all.sort((a, b) => a.start - b.start);

    const res = [];
    let curEnd = all[0].end;
    for (let i = 1; i < all.length; i++) {
        if (all[i].start > curEnd) {
            res.push(new Interval(curEnd, all[i].start)); // strict > excludes zero-length gaps
            curEnd = all[i].end;
        } else if (all[i].end > curEnd) {
            curEnd = all[i].end;
        }
    }
    return res;
};
// @lc code=end

// TEST:
function Interval(start, end) { this.start = start; this.end = end; }
const show = (ivs) => JSON.stringify(ivs.map(iv => [iv.start, iv.end]));
console.log(show(employeeFreeTime([[[1,2],[5,6]],[[1,3]],[[4,10]]].map(e => e.map(p => new Interval(p[0], p[1])))))); // [[3,4]]
console.log(show(employeeFreeTime([[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]].map(e => e.map(p => new Interval(p[0], p[1])))))); // [[5,6],[7,9]]
console.log(show(employeeFreeTime([[new Interval(1,2)]]))); // [] (single worker, no finite free)
console.log(show(employeeFreeTime([[new Interval(1,5)],[new Interval(2,3)]]))); // [] (contained interval)
console.log(show(employeeFreeTime([[new Interval(2,3)],[new Interval(5,7)],[new Interval(8,10)]]))); // [[3,5],[7,8]]
console.log(show(employeeFreeTime([[new Interval(1,2), new Interval(2,3)]]))); // [] (touching intervals, zero gap)
