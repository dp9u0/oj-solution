/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval]
  }
  if (newInterval.end < intervals[0].start) {
    return [newInterval, ...intervals]
  }
  if (newInterval.start > intervals[intervals.length - 1].end) {
    return [...intervals, newInterval]
  }
  let result = [],
    inserted = false;
  for (const interval of intervals) {
    // interval 与 newInterval 不需要合并 [4,6] [1,2] or [4,6] [7,8]
    if (interval.start > newInterval.end) {
      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }
      result.push(interval);
    } else if (interval.end < newInterval.start) {
      result.push(interval);
    } else {
      // interval 与 newInterval 需要合并
      newInterval.start = Math.min(interval.start, newInterval.start);
      newInterval.end = Math.max(interval.end, newInterval.end);
    }
  }
  if (!inserted) {
    result.push(newInterval);
  }
  return result;
};