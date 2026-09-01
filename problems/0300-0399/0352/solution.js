var SummaryRanges = function() {
    this.intervals = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    let intervals = this.intervals;
    if (intervals.length === 0) {
        intervals.push([value, value]);
        return;
    }

    // Binary search to find the correct insertion position
    let left = 0;
    let right = intervals.length - 1;
    let pos = intervals.length; // Position to insert or merge after

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (intervals[mid][0] > value) {
            pos = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // `pos` is the index of the first interval whose start > value.
    // Therefore, the interval right before `pos` is `pos - 1`.
    
    let prev = pos - 1;
    let next = pos;

    // Check if value is already contained in the previous interval
    if (prev >= 0 && intervals[prev][1] >= value) {
        return; // Already in the interval
    }

    // Check if it can be merged with both prev and next
    let mergePrev = prev >= 0 && intervals[prev][1] === value - 1;
    let mergeNext = next < intervals.length && intervals[next][0] === value + 1;

    if (mergePrev && mergeNext) {
        // Merge prev, value, and next
        intervals[prev][1] = intervals[next][1];
        intervals.splice(next, 1);
    } else if (mergePrev) {
        // Merge with prev only
        intervals[prev][1] = value;
    } else if (mergeNext) {
        // Merge with next only
        intervals[next][0] = value;
    } else {
        // Cannot merge, insert a new interval
        intervals.splice(pos, 0, [value, value]);
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    return this.intervals;
};

module.exports = SummaryRanges;

// TEST:
let sr = new SummaryRanges();
sr.addNum(1);
console.log(sr.getIntervals()); // [[1,1]]
sr.addNum(3);
console.log(sr.getIntervals()); // [[1,1], [3,3]]
sr.addNum(7);
console.log(sr.getIntervals()); // [[1,1], [3,3], [7,7]]
sr.addNum(2);
console.log(sr.getIntervals()); // [[1,3], [7,7]]
sr.addNum(6);
console.log(sr.getIntervals()); // [[1,3], [6,7]]
