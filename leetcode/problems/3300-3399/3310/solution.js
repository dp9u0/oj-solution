/*
 * @lc app=leetcode id=3310 lang=javascript
 *
 * [3310] Remove Methods From Project
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const adj = Array.from({length: n}, () => []);
    const radj = Array.from({length: n}, () => []);
    for (const [a, b] of invocations) {
        adj[a].push(b);
        radj[b].push(a);
    }

    // BFS from k to find all suspicious methods
    const suspicious = new Uint8Array(n);
    const queue = [k];
    suspicious[k] = 1;
    for (let i = 0; i < queue.length; i++) {
        for (const v of adj[queue[i]]) {
            if (!suspicious[v]) {
                suspicious[v] = 1;
                queue.push(v);
            }
        }
    }

    // Check: for each suspicious method, does any non-suspicious method invoke it?
    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) continue;
        for (const caller of radj[i]) {
            if (!suspicious[caller]) {
                const result = [];
                for (let j = 0; j < n; j++) result.push(j);
                return result;
            }
        }
    }

    const result = [];
    for (let j = 0; j < n; j++) {
        if (!suspicious[j]) result.push(j);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(remainingMethods(4, 1, [[1,2],[0,1],[3,2]]))); // [0,1,2,3]
console.log(JSON.stringify(remainingMethods(5, 0, [[1,2],[0,2],[0,1],[3,4]]))); // [3,4]
console.log(JSON.stringify(remainingMethods(3, 2, [[1,2],[0,1],[2,0]]))); // []
console.log(JSON.stringify(remainingMethods(3, 0, []))); // [1,2]
console.log(JSON.stringify(remainingMethods(1, 0, []))); // []
