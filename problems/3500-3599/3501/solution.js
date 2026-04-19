/*
 * @lc app=leetcode id=3501 lang=javascript
 *
 * [3501] Maximize Active Section with Trade II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxActiveSectionsAfterTrade = function(s, queries) {
    const n = s.length;
    // RLE: blocks[i] = [char, start, end_exclusive]
    const blocks = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) j++;
        blocks.push([parseInt(s[i]), i, j]);
        i = j;
    }

    // Total ones in s
    let totalOnes = 0;
    for (let k = 0; k < blocks.length; k++) {
        if (blocks[k][0] === 1) totalOnes += blocks[k][2] - blocks[k][1];
    }

    // Identify 1-blocks and compute trade values
    // ones[k] = { blockIdx, start, end, left0, right0, trade }
    const ones = [];
    for (let k = 0; k < blocks.length; k++) {
        if (blocks[k][0] === 1) {
            const left0 = k > 0 && blocks[k - 1][0] === 0 ? blocks[k - 1][2] - blocks[k - 1][1] : 0;
            const right0 = k + 1 < blocks.length && blocks[k + 1][0] === 0 ? blocks[k + 1][2] - blocks[k + 1][1] : 0;
            ones.push({
                blockIdx: k,
                start: blocks[k][1],
                end: blocks[k][2],
                left0,
                right0,
                trade: left0 + right0
            });
        }
    }

    const m = ones.length;
    if (m === 0) {
        return queries.map(() => totalOnes);
    }

    // Sparse table for RMQ on trade values
    const tradeVals = ones.map(o => o.trade);
    const LOG = Math.floor(Math.log2(m)) + 1;
    const sparse = Array.from({ length: LOG }, () => new Int32Array(m));
    sparse[0] = new Int32Array(tradeVals);
    for (let j = 1; j < LOG; j++) {
        const half = 1 << (j - 1);
        for (let k = 0; k + (1 << j) <= m; k++) {
            sparse[j][k] = Math.max(sparse[j - 1][k], sparse[j - 1][k + half]);
        }
    }

    const rangeMax = (l, r) => {
        if (l > r) return 0;
        const len = r - l + 1;
        const j = Math.floor(Math.log2(len));
        return Math.max(sparse[j][l], sparse[j][r - (1 << j) + 1]);
    };

    // Precompute block indices for each position (which 1-block covers position p)
    // For binary search: find first 1-block with start >= x, last 1-block with end <= y+1 etc.
    const starts = ones.map(o => o.start);
    const ends = ones.map(o => o.end);

    // Binary search: first 1-block index with start >= val
    const lowerBound = (val) => {
        let lo = 0, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (starts[mid] < val) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    // Binary search: first 1-block index with end > val (i.e., last with end <= val is idx-1)
    const upperBoundEnd = (val) => {
        let lo = 0, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (ends[mid] <= val) lo = mid + 1;
            else hi = mid;
        }
        return lo - 1;
    };

    const result = [];
    for (const [l, r] of queries) {
        // Find 1-blocks that overlap with [l, r]
        // A 1-block overlaps [l, r] if start <= r and end > l (i.e., end-1 >= l)
        // First overlapping: lowerBound(l) might not work if 1-block starts before l
        // We need first 1-block with end > l => ones that end at or after l+1
        // Actually, first 1-block overlapping [l,r]: start <= r AND end > l
        // firstIdx: first with start <= r (not useful directly)

        // Let's find 1-blocks entirely within [l, r] and partially overlapping
        // firstFullIdx: first 1-block with start >= l (fully starts within or at l)
        // lastFullIdx: last 1-block with end <= r+1 (fully ends within or at r)

        const firstIdx = lowerBound(l);
        const lastIdx = upperBoundEnd(r);

        let maxGain = 0;

        if (firstIdx <= lastIdx && firstIdx < m && lastIdx >= 0) {
            // Interior 1-blocks: [firstIdx+1, lastIdx-1] have unmodified trade values
            if (lastIdx - firstIdx >= 2) {
                maxGain = Math.max(maxGain, rangeMax(firstIdx + 1, lastIdx - 1));
            }

            // First 1-block (firstIdx): its left 0-block may be truncated by query boundary l
            // Effective left0 = min(full left0, a - l) where a = start of this 1-block
            // But the left 0-block must be within [l, r] range
            // The augmented '1' at position l-1 means left boundary is '1', so left 0-block
            // that extends before l gets truncated to [l, a-1] portion
            const fb = ones[firstIdx];
            const effLeft0_first = Math.min(fb.left0, fb.start - l);
            const effRight0_first = Math.min(fb.right0, r - fb.end + 1);
            if (effLeft0_first > 0 && effRight0_first > 0) {
                maxGain = Math.max(maxGain, effLeft0_first + effRight0_first);
            }

            // Last 1-block (lastIdx): its right 0-block may be truncated by query boundary r
            if (lastIdx !== firstIdx) {
                const lb = ones[lastIdx];
                const effLeft0_last = Math.min(lb.left0, lb.start - l);
                const effRight0_last = Math.min(lb.right0, r - lb.end + 1);
                if (effLeft0_last > 0 && effRight0_last > 0) {
                    maxGain = Math.max(maxGain, effLeft0_last + effRight0_last);
                }
            }
        }

        // Also check 1-blocks that partially overlap [l, r]
        // A 1-block that starts before l but overlaps: its start < l, end > l, end <= r+1
        // This means the 1-block straddles the left boundary
        // But with augmentation '1' at position l-1, this block is NOT surrounded by 0s on the left
        // Actually wait - the augmentation adds '1' at both ends, so the effective string is
        // t = '1' + s[l..r] + '1'. A 1-block that starts before l in s but extends into [l,r]
        // becomes part of a larger 1-block starting at position 0 in t (with the augmented '1').
        // This means it's NOT surrounded by 0s on the left side in t, so it can't be traded.

        // Similarly, a 1-block extending past r can't be traded (merged with augmented '1' on right).

        result.push(totalOnes + maxGain);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxActiveSectionsAfterTrade("01", [[0,1]]))); // [1]
console.log(JSON.stringify(maxActiveSectionsAfterTrade("0100", [[0,3],[0,2],[1,3],[2,3]]))); // [4,3,1,1]
console.log(JSON.stringify(maxActiveSectionsAfterTrade("1000100", [[1,5],[0,6],[0,4]]))); // [6,7,2]
console.log(JSON.stringify(maxActiveSectionsAfterTrade("01010", [[0,3],[1,4],[1,3]]))); // [4,4,2]
