/*
 * @lc app=leetcode id=3454 lang=javascript
 *
 * [3454] Separate Squares II
 */

// @lc code=start
/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    const xCoords = [];
    for (const [x, , l] of squares) {
        xCoords.push(x, x + l);
    }
    const xs = [...new Set(xCoords)].sort((a, b) => a - b);
    const xIdx = new Map();
    for (let i = 0; i < xs.length; i++) xIdx.set(xs[i], i);
    const m = xs.length - 1;

    const events = [];
    for (const [x, y, l] of squares) {
        events.push([y, 1, xIdx.get(x), xIdx.get(x + l)]);
        events.push([y + l, -1, xIdx.get(x), xIdx.get(x + l)]);
    }
    events.sort((a, b) => a[0] - b[0]);

    const size = 4 * m;
    const cnt = new Int32Array(size);
    const lenArr = new Float64Array(size);

    const update = (node, lo, hi, l, r, val) => {
        if (l >= hi || r <= lo) return;
        if (l <= lo && hi <= r) {
            cnt[node] += val;
        } else {
            const mid = (lo + hi) >> 1;
            update(node * 2, lo, mid, l, r, val);
            update(node * 2 + 1, mid, hi, l, r, val);
        }
        lenArr[node] = cnt[node] > 0
            ? (xs[hi] - xs[lo])
            : (hi - lo > 1 ? lenArr[node * 2] + lenArr[node * 2 + 1] : 0);
    };

    // Sweep: record strips
    const strips = [];
    let prevY = events[0][0];
    for (const [y, type, l, r] of events) {
        if (y !== prevY) {
            strips.push(prevY, y - prevY, lenArr[1]);
            prevY = y;
        }
        update(1, 0, m, l, r, type);
    }

    let totalArea = 0;
    for (let i = 0; i < strips.length; i += 3) {
        totalArea += strips[i + 1] * strips[i + 2];
    }

    const half = totalArea / 2;
    let cumArea = 0;
    for (let i = 0; i < strips.length; i += 3) {
        const yStart = strips[i], h = strips[i + 1], cl = strips[i + 2];
        const stripArea = h * cl;
        if (cumArea + stripArea >= half) {
            if (cl === 0) return yStart;
            return yStart + (half - cumArea) / cl;
        }
        cumArea += stripArea;
    }
    return prevY;
};
// @lc code=end

// TEST:
console.log(separateSquares([[0,0,1],[2,2,1]])); // 1.00000
console.log(separateSquares([[0,0,2],[1,1,1]])); // 1.00000
console.log(separateSquares([[0,0,1]])); // 0.5
console.log(separateSquares([[0,0,1],[0,0,1]])); // 0.5
console.log(separateSquares([[0,0,2],[1,0,1]])); // 1.0
console.log(separateSquares([[0,0,3],[1,1,1],[2,2,1]])); // 1.5
