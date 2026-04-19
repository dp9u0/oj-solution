/*
 * @lc app=leetcode id=1851 lang=javascript
 *
 * [1851] Minimum Interval to Include Each Query
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    const qi = queries.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    const res = new Array(queries.length).fill(-1);

    // MinHeap inline (size, right) keyed by size
    const d = [];
    const push = (size, right) => {
        d.push(size * 1e8 + right);
        let i = d.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (d[p] <= d[i]) break;
            [d[p], d[i]] = [d[i], d[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = d[0];
        const last = d.pop();
        if (d.length > 0) {
            d[0] = last;
            let i = 0;
            while (true) {
                let s = i, l = 2*i+1, r = 2*i+2;
                if (l < d.length && d[l] < d[s]) s = l;
                if (r < d.length && d[r] < d[s]) s = r;
                if (s === i) break;
                [d[s], d[i]] = [d[i], d[s]];
                i = s;
            }
        }
        return top;
    };

    let idx = 0;
    for (const [val, origIdx] of qi) {
        while (idx < intervals.length && intervals[idx][0] <= val) {
            const [l, r] = intervals[idx++];
            push(r - l + 1, r);
        }
        while (d.length > 0 && (d[0] % 1e8) < val) pop();
        if (d.length > 0) res[origIdx] = Math.floor(d[0] / 1e8);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]))); // [3,3,1,4]
console.log(JSON.stringify(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]))); // [2,-1,4,6]
console.log(JSON.stringify(minInterval([[1,1]], [1]))); // [1]
console.log(JSON.stringify(minInterval([[1,4],[2,4],[3,6],[4,4]], [5]))); // [4]
console.log(JSON.stringify(minInterval([[1,2]], [3]))); // [-1]
