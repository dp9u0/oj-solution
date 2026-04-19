/*
 * @lc app=leetcode id=1766 lang=javascript
 *
 * [1766] Tree of Coprimes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
var getCoprimes = function(nums, edges) {
    const n = nums.length;

    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const coprimes = Array.from({ length: 51 }, () => []);
    for (let v = 1; v <= 50; v++) {
        for (let u = 1; u <= 50; u++) {
            if (gcd(v, u) === 1) coprimes[v].push(u);
        }
    }

    const ans = new Array(n).fill(-1);
    const lastNode = new Int32Array(51).fill(-1);
    const lastDepth = new Int32Array(51).fill(-1);

    const stack = [{ node: 0, parent: -1, depth: 0, phase: 0 }];

    while (stack.length > 0) {
        const frame = stack.pop();
        const { node, parent, depth } = frame;

        if (frame.phase === 0) {
            let bestDepth = -1, bestNode = -1;
            for (const v of coprimes[nums[node]]) {
                if (lastNode[v] !== -1 && lastDepth[v] > bestDepth) {
                    bestDepth = lastDepth[v];
                    bestNode = lastNode[v];
                }
            }
            ans[node] = bestNode;

            const val = nums[node];
            const prevNode = lastNode[val], prevDepth = lastDepth[val];
            lastNode[val] = node;
            lastDepth[val] = depth;

            stack.push({ node, depth, phase: 1, val, prevNode, prevDepth });

            for (let i = adj[node].length - 1; i >= 0; i--) {
                const child = adj[node][i];
                if (child !== parent) {
                    stack.push({ node: child, parent: node, depth: depth + 1, phase: 0 });
                }
            }
        } else {
            lastNode[frame.val] = frame.prevNode;
            lastDepth[frame.val] = frame.prevDepth;
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getCoprimes([2, 3, 3, 2], [[0, 1], [1, 2], [1, 3]]))); // [-1,0,0,1]
console.log(JSON.stringify(getCoprimes([5, 6, 10, 2, 3, 6, 15], [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]]))); // [-1,0,-1,0,0,0,-1]
console.log(JSON.stringify(getCoprimes([1], []))); // [-1]
console.log(JSON.stringify(getCoprimes([2, 3], [[0, 1]]))); // [-1,0]
