/*
 * @lc app=leetcode id=1184 lang=javascript
 *
 * [1184] Distance Between Bus Stops
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start];
  let clockwise = 0, total = 0;
  for (let i = 0; i < distance.length; i++) {
    total += distance[i];
    if (i >= start && i < destination) clockwise += distance[i];
  }
  return Math.min(clockwise, total - clockwise);
};
// @lc code=end

// TEST:
console.log(distanceBetweenBusStops([1,2,3,4], 0, 1)); // 1
console.log(distanceBetweenBusStops([1,2,3,4], 0, 2)); // 3
console.log(distanceBetweenBusStops([1,2,3,4], 0, 3)); // 4
console.log(distanceBetweenBusStops([1,2,3,4], 3, 0)); // 4
console.log(distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 0)); // 0
