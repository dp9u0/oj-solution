/*
 * @lc app=leetcode id=3604 lang=javascript
 *
 * [3604] Minimum Time to Reach Destination in Directed Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minTime = function(n, edges) {
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, start, end] of edges) {
        adj[u].push([v, start, end]);
    }

    const dist = new Array(n).fill(Infinity);
    dist[0] = 0;

    // MinHeap [time, node]
    const heap = [[0, 0]];
    const push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p][0] <= heap[i][0]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let min = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < heap.length && heap[l][0] < heap[min][0]) min = l;
                if (r < heap.length && heap[r][0] < heap[min][0]) min = r;
                if (min === i) break;
                [heap[min], heap[i]] = [heap[i], heap[min]];
                i = min;
            }
        }
        return top;
    };

    while (heap.length > 0) {
        const [t, u] = pop();
        if (t > dist[u]) continue;
        if (u === n - 1) return t;

        for (const [v, start, end] of adj[u]) {
            if (t > end) continue;
            const arrival = Math.max(t, start) + 1;
            if (arrival < dist[v]) {
                dist[v] = arrival;
                push([arrival, v]);
            }
        }
    }
    return dist[n - 1] === Infinity ? -1 : dist[n - 1];
};
// @lc code=end

// TEST:
console.log(minTime(3, [[0,1,0,1],[1,2,2,5]]));                      // 3
console.log(minTime(4, [[0,1,0,3],[1,3,7,8],[0,2,1,5],[2,3,4,7]])); // 5
console.log(minTime(3, [[1,0,1,3],[1,2,3,5]]));                      // -1
console.log(minTime(2, [[0,1,0,0]]));                                  // 1
console.log(minTime(2, [[0,1,1,1]]));                                  // 2
