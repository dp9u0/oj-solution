/*
 * @lc app=leetcode id=1817 lang=javascript
 *
 * [1817] Finding the Users Active Minutes
 */

// @lc code=start
/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const userMinutes = new Map();
    for (const [id, time] of logs) {
        if (!userMinutes.has(id)) userMinutes.set(id, new Set());
        userMinutes.get(id).add(time);
    }
    const answer = new Array(k).fill(0);
    for (const [, times] of userMinutes) {
        const uam = times.size;
        if (uam >= 1 && uam <= k) answer[uam - 1]++;
    }
    return answer;
};
// @lc code=end

// TEST:
console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5)); // [0,2,0,0,0]
console.log(findingUsersActiveMinutes([[1,1],[2,2],[2,3]], 4)); // [1,1,0,0]
