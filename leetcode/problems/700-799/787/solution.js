/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i <= k; i++) {
        const next = [...dist];
        for (const [from, to, price] of flights) {
            if (dist[from] + price < next[to]) {
                next[to] = dist[from] + price;
            }
        }
        dist = next;
    }
    return dist[dst] === Infinity ? -1 : dist[dst];
};
// @lc code=end

// TEST:
console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1)); // 700
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)); // 200
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0)); // 500
