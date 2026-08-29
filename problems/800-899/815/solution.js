/*
 * @lc app=leetcode id=815 lang=javascript
 *
 * [815] Bus Routes
 */

// @lc code=start
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;
  const stopToRoutes = new Map();
  routes.forEach((r, i) => {
    for (const s of r) {
      if (!stopToRoutes.has(s)) stopToRoutes.set(s, []);
      stopToRoutes.get(s).push(i);
    }
  });
  if (!stopToRoutes.has(source) || !stopToRoutes.has(target)) return -1;
  const n = routes.length;
  const routeVisited = new Array(n).fill(false);
  const stopVisited = new Set([source]);
  let queue = [source];
  let buses = 0;
  while (queue.length) {
    buses++;
    const next = [];
    for (const stop of queue) {
      for (const ri of stopToRoutes.get(stop) || []) {
        if (routeVisited[ri]) continue;
        routeVisited[ri] = true;
        for (const s of routes[ri]) {
          if (s === target) return buses;
          if (!stopVisited.has(s)) {
            stopVisited.add(s);
            next.push(s);
          }
        }
      }
    }
    queue = next;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6) === 2);
console.log(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12) === -1);
console.log(numBusesToDestination([[1, 7], [3, 5]], 5, 5) === 0);
console.log(numBusesToDestination([[1, 2], [2, 3], [3, 4]], 1, 4) === 3);
console.log(numBusesToDestination([[1], [2]], 1, 2) === -1);
