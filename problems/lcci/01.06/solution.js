/*
 * @lc app=leetcode.cn id=面试题 01.06 lang=javascript
 *
 * [面试题 01.06] 字符串压缩
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    // 游程编码；片段入数组最后 join，未变短返回原串
    const n = S.length;
    const parts = [];
    let run = 0;
    for (let i = 0; i < n; i++) {
        run++;
        if (i + 1 === n || S[i] !== S[i + 1]) {
            parts.push(S[i] + run);
            run = 0;
        }
    }
    const compressed = parts.join('');
    return compressed.length < n ? compressed : S;
};
// @lc code=end

// TEST:
console.log(compressString('aabcccccaaa') === 'a2b1c5a3');
console.log(compressString('abbccd') === 'abbccd');
console.log(compressString('') === '');
console.log(compressString('a') === 'a');
console.log(compressString('aa') === 'aa'); // 等长不更短
console.log(compressString('aaa') === 'a3');
