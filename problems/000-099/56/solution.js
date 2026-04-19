/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (!intervals || intervals.length === 0 || intervals.length === 1) {
        return intervals;
    }
    var newIntervals = [];
    intervals.sort(function(first, second) {
        return first.start - second.start;
    });
    var currentInterval = new Interval(intervals[0].start, intervals[0].end);
    for (var i = 0; i < intervals.length; i++) {
        interval = intervals[i];
        if (currentInterval.end < interval.start) {
            newIntervals.push(currentInterval);
            currentInterval = new Interval(interval.start, interval.end);
        } else {
            currentInterval.end = Math.max(currentInterval.end, interval.end);
        }
    }
    newIntervals.push(currentInterval);
    return newIntervals;
};

// TEST:

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

//[1,3],[2,6],[8,10],[15,18],

// let intervals = [{ start: 1, end: 3 }, { start: 2, end: 6 }, { start: 8, end: 10 }, { start: 15, end: 18 }];
// console.log(merge(intervals));

// let intervals = [{ start: 1, end: 4 }, { start: 0, end: 4 }];
// console.log(merge(intervals));

let intervals = [{ start: 1, end: 4 }, { start: 2, end: 3 }];
console.log(merge(intervals));