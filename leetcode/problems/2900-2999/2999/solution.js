/*
 * @lc app=leetcode id=2999 lang=javascript
 *
 * [2999] Count the Number of Powerful Integers
 */

// @lc code=start
/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function(start, finish, limit, s) {
    function count(n) {
        const nStr = String(n);
        const sn = BigInt(n), sv = BigInt(s);
        if (sn < sv) return 0;
        if (nStr.length < s.length) return 0;
        if (nStr.length === s.length) return 1;

        const pLen = nStr.length - s.length;
        const prefix = nStr.substring(0, pLen);
        const suffix = nStr.substring(pLen);

        // Count prefixes strictly less than `prefix` with all digits <= limit
        let result = 0;
        const base = limit + 1;
        for (let i = 0; i < pLen; i++) {
            const d = +prefix[i];
            if (d > limit) {
                result += base ** (pLen - i);
                return result;
            }
            result += d * base ** (pLen - 1 - i);
        }

        // Check if prefix itself is valid and suffix >= s
        let prefixValid = true;
        for (let i = 0; i < pLen; i++) {
            if (+prefix[i] > limit) { prefixValid = false; break; }
        }
        if (prefixValid && suffix >= s) result++;

        return result;
    }

    return count(finish) - count(start - 1);
};
// @lc code=end

// TEST:
console.log(numberOfPowerfulInt(1, 6000, 4, "124")); // 5
console.log(numberOfPowerfulInt(15, 215, 6, "10")); // 2
console.log(numberOfPowerfulInt(1000, 2000, 4, "3000")); // 0
console.log(numberOfPowerfulInt(1, 10, 9, "1")); // 1
console.log(numberOfPowerfulInt(1, 100, 5, "1")); // 6 (1,11,21,31,41,51)
