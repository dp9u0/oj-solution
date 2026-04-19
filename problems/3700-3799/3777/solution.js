/*
 * @lc app=leetcode id=3777 lang=javascript
 *
 * [3777] Minimum Deletions to Make Alternating Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDeletions = function(s, queries) {
    const n = s.length;
    const arr = s.split('');
    const bit = new Int32Array(n + 1);
    const diff = new Uint8Array(n);

    const update = (i, delta) => {
        for (i++; i <= n; i += i & (-i)) bit[i] += delta;
    };

    const prefix = (i) => {
        let sum = 0;
        for (i++; i > 0; i -= i & (-i)) sum += bit[i];
        return sum;
    };

    const rangeSum = (l, r) => {
        if (l > r) return 0;
        return l === 0 ? prefix(r) : prefix(r) - prefix(l - 1);
    };

    for (let i = 1; i < n; i++) {
        if (arr[i] !== arr[i - 1]) { diff[i] = 1; update(i, 1); }
    }

    const ans = [];

    for (const q of queries) {
        if (q.length === 2) {
            const j = q[1];
            arr[j] = arr[j] === 'A' ? 'B' : 'A';
            if (j > 0) {
                const nv = arr[j] !== arr[j - 1] ? 1 : 0;
                if (nv !== diff[j]) { update(j, nv - diff[j]); diff[j] = nv; }
            }
            if (j + 1 < n) {
                const nv = arr[j + 1] !== arr[j] ? 1 : 0;
                if (nv !== diff[j + 1]) { update(j + 1, nv - diff[j + 1]); diff[j + 1] = nv; }
            }
        } else {
            const l = q[1], r = q[2];
            if (l === r) { ans.push(0); continue; }
            ans.push((r - l) - rangeSum(l + 1, r));
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minDeletions("ABA", [[2,1,2],[1,1],[2,0,2]])); // [0,2]
console.log(minDeletions("ABB", [[2,0,2],[1,2],[2,0,2]])); // [1,0]
console.log(minDeletions("BABA", [[2,0,3],[1,1],[2,1,3]])); // [0,1]
console.log(minDeletions("AAAA", [[2,0,3]])); // 3 (keep 1, delete 3)
console.log(minDeletions("AB", [[2,0,1]])); // 0
