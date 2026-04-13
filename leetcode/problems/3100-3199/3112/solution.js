/*
 * @lc app=leetcode id=3112 lang=javascript
 *
 * [3112] Minimum Time to Visit Disappearing Nodes
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
 */
var minimumTime = function(n, edges, disappear) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, len] of edges) {
        adj[u].push([v, len]);
        adj[v].push([u, len]);
    }

    const dist = new Array(n).fill(Infinity);
    dist[0] = 0;
    const visited = new Array(n).fill(false);

    // Binary min-heap priority queue
    const heap = [[0, 0]]; // [time, node]
    const swap = (i, j) => { [heap[i], heap[j]] = [heap[j], heap[i]]; };
    const bubbleUp = (i) => {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (heap[parent][0] <= heap[i][0]) break;
            swap(parent, i);
            i = parent;
        }
    };
    const bubbleDown = (i) => {
        const size = () => heap.length;
        while (true) {
            let smallest = i;
            const left = 2 * i + 1, right = 2 * i + 2;
            if (left < size() && heap[left][0] < heap[smallest][0]) smallest = left;
            if (right < size() && heap[right][0] < heap[smallest][0]) smallest = right;
            if (smallest === i) break;
            swap(i, smallest);
            i = smallest;
        }
    };
    const push = (item) => { heap.push(item); bubbleUp(heap.length - 1); };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) { heap[0] = last; bubbleDown(0); }
        return top;
    };

    while (heap.length > 0) {
        const [time, node] = pop();
        if (visited[node]) continue;
        visited[node] = true;

        for (const [next, len] of adj[node]) {
            const newTime = time + len;
            if (newTime < dist[next] && newTime < disappear[next]) {
                dist[next] = newTime;
                push([newTime, next]);
            }
        }
    }

    return dist.map((d) => d === Infinity ? -1 : d);
};
// @lc code=end

// TEST:
console.log(minimumTime(3, [[0,1,2],[1,2,1],[0,2,4]], [1,1,5]));  // [0,-1,4]
console.log(minimumTime(3, [[0,1,2],[1,2,1],[0,2,4]], [1,3,5]));  // [0,2,3]
console.log(minimumTime(2, [[0,1,1]], [1,1]));                       // [0,-1]
