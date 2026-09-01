/*
 * @lc app=leetcode id=407 lang=javascript
 *
 * [407] Trapping Rain Water II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;
    if (m < 3 || n < 3) return 0;

    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    // Min-heap: [height, row, col]
    const heap = [];

    const push = (h, r, c) => {
        heap.push([h, r, c]);
        let i = heap.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (heap[parent][0] <= heap[i][0]) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };

    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let smallest = i;
                const left = 2 * i + 1, right = 2 * i + 2;
                if (left < heap.length && heap[left][0] < heap[smallest][0]) smallest = left;
                if (right < heap.length && heap[right][0] < heap[smallest][0]) smallest = right;
                if (smallest === i) break;
                [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
                i = smallest;
            }
        }
        return top;
    };

    // Add boundary cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                push(heightMap[i][j], i, j);
                visited[i][j] = true;
            }
        }
    }

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let result = 0;

    while (heap.length > 0) {
        const [h, r, c] = pop();
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) continue;
            visited[nr][nc] = true;
            result += Math.max(0, h - heightMap[nr][nc]);
            push(Math.max(h, heightMap[nr][nc]), nr, nc);
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(trapRainWater([[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]])); // 4
console.log(trapRainWater([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]])); // 10
console.log(trapRainWater([[5,5,5],[5,1,5],[5,5,5]])); // 4
