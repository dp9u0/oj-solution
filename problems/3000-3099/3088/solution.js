/*
 * @lc app=leetcode.cn id=3088 lang=javascript
 *
 * [3088] 使字符串反回文
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeAntiPalindrome = function(s) {
    const n = s.length;
    const h = n / 2;
    const arr = s.split('').sort();
    const cnt = new Array(26).fill(0);
    for (const ch of arr) cnt[ch.charCodeAt(0) - 97]++;
    for (const c of cnt) {
        if (c > h) return '-1';
    }
    // A = sorted first half (optimal prefix); forbidden[j] = A[h-1-j]
    const aCode = [];
    for (let i = 0; i < h; i++) aCode.push(arr[i].charCodeAt(0) - 97);
    const remaining = new Array(26).fill(0);
    for (let j = h; j < n; j++) remaining[arr[j].charCodeAt(0) - 97]++;
    // freqF[v] = occurrences of v among forbidden[0..h-1-j1]; total = positions left
    const freqF = new Array(26).fill(0);
    for (const v of aCode) freqF[v]++;
    let total = h;
    const B = [];
    for (let j = 0; j < h; j++) {
        const f = aCode[h - 1 - j];
        for (let x = 0; x < 26; x++) {
            if (remaining[x] === 0 || x === f) continue;
            remaining[x]--;
            freqF[f]--;
            total--;
            let ok = true;
            for (let v = 0; v < 26; v++) {
                if (remaining[v] > total - freqF[v]) { ok = false; break; }
            }
            if (ok) { B.push(x); break; }
            remaining[x]++;
            freqF[f]++;
            total++;
        }
    }
    return arr.slice(0, h).join('') + B.map((x) => String.fromCharCode(97 + x)).join('');
};
// @lc code=end

// TEST:
console.log(makeAntiPalindrome("abca")); // aabc
console.log(makeAntiPalindrome("abba")); // aabb
console.log(makeAntiPalindrome("cccd")); // -1
console.log(makeAntiPalindrome("aa")); // -1
console.log(makeAntiPalindrome("lmmn")); // lmnm
console.log(makeAntiPalindrome("uunivwwb")); // binuvuww
console.log(makeAntiPalindrome("dcba")); // abcd
