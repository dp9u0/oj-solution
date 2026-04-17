/*
 * @lc app=leetcode id=3425 lang=javascript
 *
 * [3425] Longest Special Path
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} nums
 * @return {number[]}
 */
var longestSpecialPath = function(edges, nums) {
    const n = nums.length;
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    let bestLen = 0, bestNodes = 1;
    const lastSeen = new Map();
    const depth = []; // depth[i] = distance from root to path[i]
    let left = 0;

    const stk = [{type: 'enter', node: 0, parent: -1, edgeLen: 0}];

    while (stk.length > 0) {
        const item = stk.pop();

        if (item.type === 'enter') {
            const {node, parent, edgeLen} = item;
            const val = nums[node];
            const pos = depth.length;
            const prevLeft = left;
            const prevSeen = lastSeen.get(val);
            const hasPrev = lastSeen.has(val);

            depth.push(pos === 0 ? 0 : depth[pos - 1] + edgeLen);

            if (hasPrev && prevSeen >= left) left = prevSeen + 1;
            lastSeen.set(val, pos);

            const curLen = depth[pos] - depth[left];
            const curNodes = pos - left + 1;
            if (curLen > bestLen || (curLen === bestLen && curNodes < bestNodes)) {
                bestLen = curLen;
                bestNodes = curNodes;
            }

            stk.push({type: 'exit', prevLeft, prevSeen, hasPrev, val});

            for (let i = adj[node].length - 1; i >= 0; i--) {
                const [v, w] = adj[node][i];
                if (v !== parent) stk.push({type: 'enter', node: v, parent: node, edgeLen: w});
            }
        } else {
            if (item.hasPrev) lastSeen.set(item.val, item.prevSeen);
            else lastSeen.delete(item.val);
            left = item.prevLeft;
            depth.pop();
        }
    }

    return [bestLen, bestNodes];
};
// @lc code=end

// TEST:
console.log(longestSpecialPath([[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]], [2,1,2,1,3,1])); // [6,2]
console.log(longestSpecialPath([[1,0,8]], [2,2])); // [0,1]
console.log(longestSpecialPath([[0,1,1]], [1,2])); // [1,2]
console.log(longestSpecialPath([[0,1,5]], [1,1])); // [0,1]
console.log(longestSpecialPath([[0,1,1],[1,2,1],[2,3,1]], [1,2,3,4])); // [3,4]
