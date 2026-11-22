/*
 * @lc app=leetcode.cn id=3037 lang=javascript
 *
 * [3037] 在无限流中寻找模式 II
 */

// @lc code=start
/**
 * Definition for an infinite stream.
 * class InfiniteStream {
 *     @param {number[]} bits
 *     constructor(bits);
 *
 *     @return {number}
 *     next();
 * }
 */
/**
 * @param {InfiniteStream} stream
 * @param {number[]} pattern
 * @return {number}
 */
var findPattern = function(stream, pattern) {
    const m = pattern.length;
    // prefix (failure) function
    const fail = new Array(m).fill(0);
    for (let i = 1, k = 0; i < m; i++) {
        while (k > 0 && pattern[i] !== pattern[k]) k = fail[k - 1];
        if (pattern[i] === pattern[k]) k++;
        fail[i] = k;
    }
    let state = 0;
    let idx = 0;
    for (;;) {
        const bit = stream.next();
        while (state > 0 && pattern[state] !== bit) state = fail[state - 1];
        if (pattern[state] === bit) state++;
        if (state === m) return idx - m + 1;
        idx++;
    }
};
// @lc code=end

// TEST:
class InfiniteStream {
    constructor(bits) { this.bits = bits; this.pos = 0; }
    next() { return this.bits[this.pos++]; }
};
console.log(findPattern(new InfiniteStream([1,1,1,0,1,1,1,1]), [0,1])); // 3
console.log(findPattern(new InfiniteStream([0,0,0,0]), [0])); // 0
console.log(findPattern(new InfiniteStream([1,0,1,1,0,1,1,0,1]), [1,1,0,1])); // 2
console.log(findPattern(new InfiniteStream([1,0,1,0,1]), [1,0,1])); // 0
console.log(findPattern(new InfiniteStream([0,1,0,1,1,0,1,0]), [1,1,0,1,0])); // 3
