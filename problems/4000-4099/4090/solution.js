/*
 * @lc app=leetcode.cn id=4090 lang=javascript
 *
 * [4090] 统计神奇子字符串对 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countMagicalPairs = function(s) {
    const n = s.length;
    let ans = 0;
    for (let j = 0; j < n - 1; j++) {
        const cntL = new Array(27).fill(0);
        const cntR = new Array(27).fill(0);
        let maskL = 0, pcL = 0;
        for (let i = j; i >= 0; i--) {
            const b = 1 << (s.charCodeAt(i) - 97);
            if (!(maskL & b)) { maskL |= b; pcL++; }
            cntL[pcL]++;
        }
        let maskR = 0, pcR = 0;
        for (let k = j + 1; k < n; k++) {
            const b = 1 << (s.charCodeAt(k) - 97);
            if (!(maskR & b)) { maskR |= b; pcR++; }
            cntR[pcR]++;
        }
        for (let d = 1; d <= 26; d++) ans += cntL[d] * cntR[d];
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
