/*
 * @lc app=leetcode.cn id=2613 lang=javascript
 *
 * [2613] 美数对
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var beautifulPair = function(nums1, nums2) {
    const n = nums1.length;
    // BIT over b-coordinate (0..n) storing [extremeVal, idx] (max of stored value; tie -> smaller idx)
    const mkBIT = () => ({ nodes: new Array(n + 2).fill(null) });
    const bitUpdate = (bit, pos, val, idx) => {
        for (pos = pos + 1; pos > 0 && pos <= n + 1; pos += pos & (-pos)) {
            const cur = bit.nodes[pos];
            if (cur === null || val > cur[0] || (val === cur[0] && idx < cur[1])) {
                bit.nodes[pos] = [val, idx];
            }
        }
    };
    const bitQuery = (bit, pos) => {
        // extreme over inserted positions <= pos (already-negated vals; null if none)
        let out = null;
        for (pos = Math.min(pos + 1, n + 1); pos > 0; pos -= pos & (-pos)) {
            const cur = bit.nodes[pos];
            if (cur !== null && (out === null || cur[0] > out[0] || (cur[0] === out[0] && cur[1] < out[1]))) {
                out = cur;
            }
        }
        return out;
    };
    const idxByAAsc = Array.from({ length: n }, (_, k) => k)
        .sort((x, y) => nums1[x] - nums1[y] || x - y);
    const idxByADesc = idxByAAsc.slice().reverse();
    let best = null; // [dist, i, j]
    const consider = (dist, i, j) => {
        if (i === j) return;
        if (i > j) { const t = i; i = j; j = t; }
        if (best === null || dist < best[0] || (dist === best[0] && (i < best[1] || (i === best[1] && j < best[2])))) {
            best = [dist, i, j];
        }
    };
    // BIT A1: asc sweep, max of (a+b) over b <= bj
    const bitA1 = mkBIT();
    // BIT A2: asc sweep, max of (a-b) over b >= bj  (store with reversed pos n-b)
    const bitA2 = mkBIT();
    {
        let start = 0;
        while (start < n) {
            let end = start;
            while (end < n && nums1[idxByAAsc[end]] === nums1[idxByAAsc[start]]) end++;
            for (let k = start; k < end; k++) {
                const j = idxByAAsc[k];
                const s = nums1[j] + nums2[j], d = nums1[j] - nums2[j];
                const q1 = bitQuery(bitA1, nums2[j]); // b <= bj
                if (q1 !== null && q1[1] !== j) consider(s - q1[0], q1[1], j);
                const q2 = bitQuery(bitA2, n - nums2[j]); // b >= bj
                if (q2 !== null && q2[1] !== j) consider(d - q2[0], q2[1], j);
                bitUpdate(bitA1, nums2[j], s, j);
                bitUpdate(bitA2, n - nums2[j], d, j);
            }
            start = end;
        }
    }
    // BIT B1: desc sweep, min of (a+b) over b >= bj  (store -(a+b), reversed pos)
    const bitB1 = mkBIT();
    // BIT B2: desc sweep, min of (a-b) over b <= bj  (store -(a-b))
    const bitB2 = mkBIT();
    {
        let start = 0;
        while (start < n) {
            let end = start;
            while (end < n && nums1[idxByADesc[end]] === nums1[idxByADesc[start]]) end++;
            for (let k = start; k < end; k++) {
                const j = idxByADesc[k];
                const s = nums1[j] + nums2[j], d = nums1[j] - nums2[j];
                const q3 = bitQuery(bitB1, n - nums2[j]); // b >= bj
                if (q3 !== null && q3[1] !== j) consider(-q3[0] - s, q3[1], j);
                const q4 = bitQuery(bitB2, nums2[j]); // b <= bj
                if (q4 !== null && q4[1] !== j) consider(-q4[0] - d, q4[1], j);
                bitUpdate(bitB1, n - nums2[j], -s, j);
                bitUpdate(bitB2, nums2[j], -d, j);
            }
            start = end;
        }
    }
    return [best[1], best[2]];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(beautifulPair([1,2,3,2,4], [2,3,1,2,3]))); // [0,3]
console.log(JSON.stringify(beautifulPair([1,2,4,3,2,5], [1,4,2,3,5,1]))); // [1,4]
console.log(JSON.stringify(beautifulPair([1,1], [1,1]))); // [0,1]
console.log(JSON.stringify(beautifulPair([3,1], [1,3]))); // [0,1] (dist 4 both ways, lex smallest)
