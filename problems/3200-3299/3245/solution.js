/*
 * @lc app=leetcode id=3245 lang=javascript
 *
 * [3245] Alternating Groups III
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var numberOfAlternatingGroups = function(colors, queries) {
    const n = colors.length;

    let bps = [];
    const lenCount = new Map();

    const addLen = (l) => lenCount.set(l, (lenCount.get(l) || 0) + 1);
    const removeLen = (l) => {
        const v = lenCount.get(l);
        if (v === 1) lenCount.delete(l);
        else if (v !== undefined) lenCount.set(l, v - 1);
    };

    const segLen = (b1, b2) => b2 > b1 ? b2 - b1 : (b2 < b1 ? n - b1 + b2 : n);

    const findIdx = (val) => {
        let lo = 0, hi = bps.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (bps[mid] < val) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const addBp = (pos) => {
        const k = bps.length;
        if (k === 0) {
            removeLen(n);
            bps.push(pos);
            addLen(n);
            return;
        }
        const insertIdx = findIdx(pos);
        const prevIdx = (insertIdx - 1 + k) % k;
        const nextIdx = insertIdx % k;
        removeLen(segLen(bps[prevIdx], bps[nextIdx]));
        addLen(segLen(bps[prevIdx], pos));
        addLen(segLen(pos, bps[nextIdx]));
        bps.splice(insertIdx, 0, pos);
    };

    const removeBp = (pos) => {
        const k = bps.length;
        const idx = findIdx(pos);
        if (idx >= k || bps[idx] !== pos) return;
        if (k === 1) {
            removeLen(n);
            bps = [];
            addLen(n);
            return;
        }
        const prevIdx = (idx - 1 + k) % k;
        const nextIdx = (idx + 1) % k;
        removeLen(segLen(bps[prevIdx], pos));
        removeLen(segLen(pos, bps[nextIdx]));
        addLen(segLen(bps[prevIdx], bps[nextIdx]));
        bps.splice(idx, 1);
    };

    // Initialize
    for (let i = 0; i < n; i++) {
        if (colors[i] === colors[(i + 1) % n]) bps.push(i);
    }
    bps.sort((a, b) => a - b);
    if (bps.length === 0) {
        addLen(n);
    } else {
        const k = bps.length;
        for (let j = 0; j < k; j++) {
            addLen(segLen(bps[j], bps[(j + 1) % k]));
        }
    }

    const countSize = (size) => {
        if (bps.length === 0) return n;
        let total = 0;
        for (const [len, cnt] of lenCount) {
            if (len >= size) total += cnt * (len - size + 1);
        }
        return total;
    };

    const results = [];
    for (const q of queries) {
        if (q[0] === 1) {
            results.push(countSize(q[1]));
        } else {
            const [_, idx, color] = q;
            if (colors[idx] === color) continue;
            const prev = (idx - 1 + n) % n;
            const next = (idx + 1) % n;

            if (colors[prev] === colors[idx]) removeBp(prev);
            if (colors[idx] === colors[next]) removeBp(idx);

            colors[idx] = color;

            if (colors[prev] === colors[idx]) addBp(prev);
            if (colors[idx] === colors[next]) addBp(idx);
        }
    }

    return results;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(numberOfAlternatingGroups([0,1,1,0,1], [[2,1,0],[1,4]]))); // [2]
console.log(JSON.stringify(numberOfAlternatingGroups([0,0,1,0,1,1], [[1,3],[2,3,0],[1,5]]))); // [2,0]
