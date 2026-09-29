/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    const ans = new Array(seq.length);
    let depth = 0;
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            ans[i] = depth & 1;
            depth++;
        } else {
            depth--;
            ans[i] = depth & 1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
const isValidVps = (s) => {
    let d = 0;
    for (const c of s) {
        d += c === '(' ? 1 : -1;
        if (d < 0) return false;
    }
    return d === 0;
};

const depthOf = (s) => {
    let d = 0, max = 0;
    for (const c of s) {
        d += c === '(' ? 1 : -1;
        max = Math.max(max, d);
    }
    return max;
};

// 校验拆分结果：A、B 均为 VPS 且 max 深度达到理论下界 ⌈D/2⌉
const validate = (seq, ans) => {
    if (ans.length !== seq.length) return false;
    let a = '', b = '';
    for (let i = 0; i < seq.length; i++) {
        if (ans[i] === 0) a += seq[i];
        else b += seq[i];
    }
    const minMax = Math.ceil(depthOf(seq) / 2);
    return isValidVps(a) && isValidVps(b) && Math.max(depthOf(a), depthOf(b)) === minMax;
};

// 示例 1：官方样例的精确答案
console.log(JSON.stringify(maxDepthAfterSplit('(()())')) === JSON.stringify([0, 1, 1, 1, 1, 0]));

// 其余用答案不唯一，校验合法性
console.log(validate('()(())()', maxDepthAfterSplit('()(())()')));
console.log(validate('()', maxDepthAfterSplit('()')));
console.log(validate('()()', maxDepthAfterSplit('()()')));
console.log(validate('((((()))))', maxDepthAfterSplit('((((()))))')));
console.log(validate('(())(()())', maxDepthAfterSplit('(())(()())')));
console.log(validate('(()(()()))', maxDepthAfterSplit('(()(()()))')));
