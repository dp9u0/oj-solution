/*
 * @lc app=leetcode.cn id=555 lang=javascript
 *
 * [555] 分割连接字符串
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var splitLoopedString = function(strs) {
    const n = strs.length;
    const rev = s => [...s].reverse().join('');
    // every non-focus string contributes its larger orientation
    const others = strs.map(s => { const r = rev(s); return s > r ? s : r; });
    // prefix/suffix concatenations for O(1) "middle" extraction
    const pre = new Array(n + 1).fill('');
    for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + others[i];
    const suf = new Array(n + 1).fill('');
    for (let i = n - 1; i >= 0; i--) suf[i] = others[i] + suf[i + 1];

    let best = '';
    for (let i = 0; i < n; i++) {
        // loop order after the cut: i+1 ... n-1, 0 ... i-1
        const middle = suf[i + 1] + pre[i];
        for (const o of [strs[i], rev(strs[i])]) {
            for (let p = 0; p < o.length; p++) {
                const cand = o.slice(p) + middle + o.slice(0, p);
                if (cand > best) best = cand;
            }
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(splitLoopedString(["abc", "xyz"])); // "zyxcba"
console.log(splitLoopedString(["abc"])); // "cba"
console.log(splitLoopedString(["ab", "ba", "cc"])); // "ccbaba" (focus cc, p=1)
console.log(splitLoopedString(["a", "b"])); // "ba"
console.log(splitLoopedString(["zz", "aa"])); // "zzaa"
