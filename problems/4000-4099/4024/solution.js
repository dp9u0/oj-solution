/*
 * @lc app=leetcode id=4024 lang=javascript
 *
 * [4024] Nearest Available Drone
 */

// @lc code=start
/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function(drones, target) {
    const [tx, ty] = target;
    let bestDist = Infinity;
    let bestIndex = -1;

    for (let i = 0; i < drones.length; i++) {
        const [x, y, range] = drones[i];
        const dist = Math.abs(x - tx) + Math.abs(y - ty);
        if (dist <= range && dist < bestDist) {
            bestDist = dist;
            bestIndex = i;
        }
    }

    return bestIndex;
};
// @lc code=end

// TEST:
console.log(nearestDrone([[0,0,8],[2,2,9]], [3,4]) === 1); // 例子1：距离 7 和 3，均可达，选最近的 1
console.log(nearestDrone([[2,1,5],[4,4,5],[6,6,8]], [5,5]) === 1); // 例子2：平局距离 2，取最小索引 1
console.log(nearestDrone([[4,4,5]], [8,6]) === -1); // 例子3：距离 6 > 范围 5，无可达
console.log(nearestDrone([[0,0,0]], [0,0]) === 0); // 距离恰好等于范围（0 <= 0），可达
console.log(nearestDrone([[5,5,1],[1,1,10],[9,9,3]], [2,2]) === 1); // 多台可达，距离 6/0/14，选索引 1
console.log(nearestDrone([[10,10,3],[3,3,1]], [4,4]) === -1); // 距离 12>3、2>1，均不可达
console.log(nearestDrone([[-2,-2,5],[2,2,5]], [0,0]) === 0); // 负坐标平局距离 4，取索引 0