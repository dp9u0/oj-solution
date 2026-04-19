/*
 * @lc app=leetcode id=842 lang=javascript
 *
 * [842] Split Array into Fibonacci Sequence
 */

// @lc code=start
/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function(num) {
    const n = num.length;
    const MAX = 2147483647; // 2^31 - 1

    for (let i = 1; i <= Math.min(n / 2, 10); i++) {
        if (i > 1 && num[0] === '0') break;
        const first = parseInt(num.slice(0, i));
        if (first > MAX) break;

        for (let j = 1; Math.max(i, j) <= n - i - j; j++) {
            if (j > 1 && num[i] === '0') break;
            const second = parseInt(num.slice(i, i + j));
            if (second > MAX) break;

            const result = [first, second];
            let start = i + j;

            while (start < n) {
                const next = result[result.length - 1] + result[result.length - 2];
                if (next > MAX) break;
                const nextStr = next.toString();
                if (!num.startsWith(nextStr, start)) break;
                result.push(next);
                start += nextStr.length;
            }

            if (start === n && result.length >= 3) {
                return result;
            }
        }
    }

    return [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(splitIntoFibonacci("1101111"))); // [11,0,11,11] or [110,1,111]
console.log(JSON.stringify(splitIntoFibonacci("112358130"))); // []
console.log(JSON.stringify(splitIntoFibonacci("0123"))); // []
