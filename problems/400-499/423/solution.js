/*
 * @lc app=leetcode id=423 lang=javascript
 *
 * [423] Reconstruct Original Digits from English
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const cnt = new Array(26).fill(0);
    for (const c of s) cnt[c.charCodeAt(0) - 97]++;

    const d = new Array(10).fill(0);
    d[0] = cnt['z'.charCodeAt(0) - 97];
    d[2] = cnt['w'.charCodeAt(0) - 97];
    d[4] = cnt['u'.charCodeAt(0) - 97];
    d[6] = cnt['x'.charCodeAt(0) - 97];
    d[8] = cnt['g'.charCodeAt(0) - 97];
    d[1] = cnt['o'.charCodeAt(0) - 97] - d[0] - d[2] - d[4];
    d[3] = cnt['h'.charCodeAt(0) - 97] - d[8];
    d[5] = cnt['f'.charCodeAt(0) - 97] - d[4];
    d[7] = cnt['s'.charCodeAt(0) - 97] - d[6];
    d[9] = cnt['i'.charCodeAt(0) - 97] - d[5] - d[6] - d[8];

    let result = '';
    for (let i = 0; i <= 9; i++) result += String(i).repeat(d[i]);
    return result;
};
// @lc code=end

// TEST:
console.log(originalDigits('owoztneoer') === '012');
console.log(originalDigits('fviefuro') === '45');
console.log(originalDigits('zerozero') === '00');
console.log(originalDigits('ninesix') === '69');
console.log(originalDigits('one') === '1');
