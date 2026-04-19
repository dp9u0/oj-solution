/*
 * @lc app=leetcode id=1306 lang=javascript
 *
 * [1306] Jump Game III
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const n = arr.length;
    const visited = new Array(n).fill(false);
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const i = queue.shift();
        if (arr[i] === 0) return true;
        for (const next of [i + arr[i], i - arr[i]]) {
            if (next >= 0 && next < n && !visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(canReach([4,2,3,0,3,1,2], 5)); // true
console.log(canReach([4,2,3,0,3,1,2], 0)); // true
console.log(canReach([3,0,2,1,2], 2)); // false
