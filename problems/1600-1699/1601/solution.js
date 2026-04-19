/*
 * @lc app=leetcode id=1601 lang=javascript
 *
 * [1601] Maximum Number of Achievable Transfer Requests
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    const m = requests.length;
    let result = 0;

    for (let mask = 0; mask < (1 << m); mask++) {
        let cnt = 0;
        for (let i = 0; i < m; i++) if (mask & (1 << i)) cnt++;
        if (cnt <= result) continue;

        const bal = new Array(n).fill(0);
        for (let i = 0; i < m; i++) {
            if (mask & (1 << i)) {
                bal[requests[i][0]]--;
                bal[requests[i][1]]++;
            }
        }

        let valid = true;
        for (let j = 0; j < n; j++) {
            if (bal[j] !== 0) { valid = false; break; }
        }
        if (valid) result = cnt;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maximumRequests(5, [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]])); // 5
console.log(maximumRequests(3, [[0,0],[1,2],[2,1]])); // 3
console.log(maximumRequests(4, [[0,3],[3,1],[1,2],[2,0]])); // 4
console.log(maximumRequests(2, [[0,1]])); // 0
console.log(maximumRequests(2, [[0,1],[1,0]])); // 2
