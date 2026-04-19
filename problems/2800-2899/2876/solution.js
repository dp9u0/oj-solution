/*
 * @lc app=leetcode id=2876 lang=javascript
 *
 * [2876] Count Visited Nodes in a Directed Graph
 */

// @lc code=start
/**
 * @param {number[]} edges
 * @return {number[]}
 */
var countVisitedNodes = function(edges) {
    const n = edges.length;
    const inDeg = new Array(n).fill(0);
    for (let i = 0; i < n; i++) inDeg[edges[i]]++;

    // Topological sort to identify cycle nodes
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) queue.push(i);
    }
    const order = [];
    while (queue.length) {
        const node = queue.shift();
        order.push(node);
        if (--inDeg[edges[node]] === 0) {
            queue.push(edges[node]);
        }
    }

    // Remaining nodes (inDeg > 0) are on cycles
    const answer = new Array(n).fill(0);

    // Process each cycle
    const visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (inDeg[i] > 0 && !visited[i]) {
            // Find cycle starting from i
            const cycle = [];
            let node = i;
            while (!visited[node]) {
                visited[node] = true;
                cycle.push(node);
                node = edges[node];
            }
            const cycleSize = cycle.length;
            for (const c of cycle) {
                answer[c] = cycleSize;
            }
        }
    }

    // Process chain nodes in reverse topological order
    for (let i = order.length - 1; i >= 0; i--) {
        answer[order[i]] = answer[edges[order[i]]] + 1;
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(countVisitedNodes([1,2,0,0])); // [3,3,3,4]
console.log(countVisitedNodes([1,2,3,4,0])); // [5,5,5,5,5]
