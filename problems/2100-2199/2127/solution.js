/*
 * @lc app=leetcode id=2127 lang=javascript
 *
 * [2127] Maximum Employees to Be Invited to a Meeting
 */

// @lc code=start
/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function(favorite) {
    const n = favorite.length;
    const revAdj = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) revAdj[favorite[i]].push(i);

    const state = new Int32Array(n);
    const pos = new Int32Array(n).fill(-1);
    let maxCycleLen = 0;
    let total2Cycle = 0;

    const longestChain = (start, exclude) => {
        let maxD = 0;
        const stk = [[start, 0]];
        while (stk.length) {
            const [node, d] = stk.pop();
            if (d > maxD) maxD = d;
            for (const next of revAdj[node]) {
                if (next !== exclude) stk.push([next, d + 1]);
            }
        }
        return maxD;
    };

    for (let i = 0; i < n; i++) {
        if (state[i] !== 0) continue;
        const path = [];
        let cur = i, d = 0;
        while (state[cur] === 0) {
            state[cur] = 1;
            path.push(cur);
            pos[cur] = d++;
            cur = favorite[cur];
        }
        if (state[cur] === 1) {
            const cycleLen = d - pos[cur];
            if (cycleLen > maxCycleLen) maxCycleLen = cycleLen;
            if (cycleLen === 2) {
                const a = cur, b = favorite[cur];
                total2Cycle += 2 + longestChain(a, b) + longestChain(b, a);
            }
        }
        for (const v of path) { state[v] = 2; pos[v] = -1; }
    }

    return Math.max(maxCycleLen, total2Cycle);
};
// @lc code=end

// TEST:
console.log(maximumInvitations([2,2,1,2])); // 3
console.log(maximumInvitations([1,2,0])); // 3
console.log(maximumInvitations([3,0,1,4,1])); // 4
console.log(maximumInvitations([1,0])); // 2
console.log(maximumInvitations([1,0,3,2])); // 4
console.log(maximumInvitations([2,3,4,0,1])); // 5
