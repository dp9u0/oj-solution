/*
 * @lc app=leetcode.cn id=LCR 173 lang=javascript
 *
 * [LCR 173] 点名
 */

// @lc code=start
/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function(records) {
    let left = 0;
    let right = records.length;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (records[mid] === mid) {
            // 缺失数字在右侧
            left = mid + 1;
        } else {
            // 缺失数字是 mid 或在 mid 左侧
            right = mid;
        }
    }
    return left;
};
// @lc code=end

// TEST:
const tests = [
  [[0, 1, 2, 3, 5], 4],
  [[0, 1, 2, 3, 4, 5, 6, 8], 7],
  [[0, 1, 2, 3, 4], 5], // 缺最后一个
  [[1], 0], // 缺第一个
  [[0], 1], // 缺最后一个(单元素)
  [[0, 1, 3], 2],
  [[1, 2, 3], 0], // 缺首位
];

for (const [records, expected] of tests) {
  const actual = takeAttendance(records);
  const pass = actual === expected;
  console.log(`takeAttendance([${records}]) = ${actual} ${pass ? 'PASS' : `FAIL (expected ${expected})`}`);
}
