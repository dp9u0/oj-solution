/*
 * @lc app=leetcode.cn id=4091 lang=javascript
 *
 * [4091] 统计神奇子字符串对 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countMagicalPairs = function(s) {
    const n = s.length;
    const prv = new Int32Array(n); // 上一处相同字符位置,无则 -1
    const nxt = new Int32Array(n).fill(-1); // 下一处相同字符位置,无则 -1
    const last = new Int32Array(26).fill(-1);
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;
        prv[i] = last[c];
        if (last[c] >= 0) nxt[last[c]] = i;
        last[c] = i;
    }

    // 左侧 last-occurrence 断点(split j 时含 j);右侧 split 后首现断点(从 j+1 起)
    const A = [0];
    const R = [];
    const seen = new Uint8Array(26); // 右侧部分内出现过的字符
    for (let k = 1; k < n; k++) {
        const c = s.charCodeAt(k) - 97;
        if (!seen[c]) { seen[c] = 1; R.push(k); }
    }

    const cntL = new Array(27).fill(0);
    const cntR = new Array(27).fill(0);
    let ans = 0;

    for (let j = 0; j + 1 < n; j++) {
        // cntL[d] = A 间隔(升序,从 -1 起,d 从大到小);cntR[d] = R[d]-R[d-1](末尾到 n)
        cntL.fill(0);
        cntR.fill(0);
        let m = A.length;
        let prev = -1;
        for (let t = 0; t < m; t++) {
            cntL[m - t] = A[t] - prev;
            prev = A[t];
        }
        m = R.length;
        for (let d = 1; d < m; d++) cntR[d] = R[d] - R[d - 1];
        cntR[m] = n - R[m - 1];

        let dot = 0;
        for (let d = 1; d <= 26; d++) dot += cntL[d] * cntR[d];
        ans += dot;

        if (j + 2 >= n) break;
        const c = s.charCodeAt(j + 1) - 97;
        // 左:删 prv[j+1],插 j+1
        const p = prv[j + 1];
        if (p >= 0) A.splice(A.indexOf(p), 1);
        let lo = 0, hi = A.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; A[mid] < j + 1 ? lo = mid + 1 : hi = mid; }
        A.splice(lo, 0, j + 1);
        // 右:删首(j+1),插 nxt[j+1]
        R.shift();
        const q = nxt[j + 1];
        if (q >= 0) {
            let lo2 = 0, hi2 = R.length;
            while (lo2 < hi2) { const mid = (lo2 + hi2) >> 1; R[mid] < q ? lo2 = mid + 1 : hi2 = mid; }
            R.splice(lo2, 0, q);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countMagicalPairs("aba") === 2);
console.log(countMagicalPairs("kkk") === 4);
console.log(countMagicalPairs("abcac") === 7);
console.log(countMagicalPairs("ab") === 1);
console.log(countMagicalPairs("abca") === 4); // 暴力对拍确认
