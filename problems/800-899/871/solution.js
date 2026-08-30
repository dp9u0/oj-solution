/*
 * @lc app=leetcode id=871 lang=javascript
 *
 * [871] Minimum Number of Refueling Stops
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  // 贪心 + 最大堆：车沿直线行驶，路过加油站时其油量即"可选"。
  // 每当油不够到达下一站/终点时，从已路过未使用的站中取油量最大者加上
  // （等价于反悔回该站加油一次）。
  const heap = []; // 按油量降序存放已路过站点的油量，堆顶在头部
  let reach = startFuel; // 当前最远可达位置
  let count = 0; // 加油次数
  let i = 0;
  const n = stations.length;

  while (reach < target) {
    // 收集所有已经路过的加油站（位置可达）
    while (i < n && stations[i][0] <= reach) {
      insertDesc(heap, stations[i][1]);
      i++;
    }
    if (heap.length === 0) return -1; // 无油可加，无法前进
    reach += heap.shift(); // 取最大油量加油
    count++;
  }
  return count;
};

/**
 * 将 value 二分插入降序数组，保持有序
 * @param {number[]} arr
 * @param {number} value
 */
function insertDesc(arr, value) {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < value) hi = mid;
    else lo = mid + 1;
  }
  arr.splice(lo, 0, value);
}
// @lc code=end

// TEST:
console.log(minRefuelStops(1, 1, []) === 0); // 示例1:无需加油
console.log(minRefuelStops(100, 1, [[10, 100]]) === -1); // 示例2:到不了第一个加油站
console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]) === 2); // 示例3
console.log(minRefuelStops(100, 50, [[25, 25], [50, 50]]) === 1); // 开到50处加一次即可
console.log(minRefuelStops(100, 25, [[25, 25], [50, 25], [75, 25]]) === 3); // 每站都必须加
console.log(minRefuelStops(1000, 1, []) === -1); // 无加油站且油不够
console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]) === 2); // 贪心选大站:10处加60后直达60处再加40
console.log(minRefuelStops(105, 10, [[5, 5], [8, 100]]) === 1); // 被迫加油时应选油量最大的站
