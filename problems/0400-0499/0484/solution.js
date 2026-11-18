/*
 * @lc app=leetcode.cn id=484 lang=javascript
 *
 * [484] 寻找排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
    const n = s.length + 1;
    const res = Array.from({ length: n }, (_, i) => i + 1);
    let i = 0;
    while (i < s.length) {
        if (s[i] === 'I') { i++; continue; }
        let j = i;
        while (j < s.length && s[j] === 'D') j++;
        // maximal D-run s[i..j-1] -> reverse perm positions i..j
        for (let a = i, b = j; a < b; a++, b--) {
            [res[a], res[b]] = [res[b], res[a]];
        }
        i = j;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(findPermutation('I')); // [1,2]
console.log(findPermutation('DI')); // [2,1,3]
console.log(findPermutation('III')); // [1,2,3,4]
console.log(findPermutation('DDD')); // [4,3,2,1]
console.log(findPermutation('DIID')); // [2,1,3,5,4] (two D-runs: single D then D)
console.log(findPermutation('DDIIDD')); // [3,2,1,4,7,6,5] (D-run at 0-1, D-run at 4-5)
