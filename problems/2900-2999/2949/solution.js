/*
 * @lc app=leetcode id=2949 lang=javascript
 *
 * [2949] Count Beautiful Substrings II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Find minimum v0 such that v0^2 % k == 0
    let v0 = 1;
    let temp = k;
    for (let p = 2; p * p <= temp; p++) {
        if (temp % p === 0) {
            let a = 0;
            while (temp % p === 0) {
                a++;
                temp = Math.floor(temp / p);
            }
            v0 *= Math.pow(p, Math.ceil(a / 2));
        }
    }
    if (temp > 1) v0 *= temp;

    const period = 2 * v0;

    const map = new Map();
    let prefixSum = 0;
    let result = 0;

    map.set(`${0},${0}`, 1);

    for (let i = 1; i <= s.length; i++) {
        prefixSum += vowels.has(s[i - 1]) ? 1 : -1;
        const key = `${prefixSum},${i % period}`;
        const count = map.get(key) || 0;
        result += count;
        map.set(key, count + 1);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(beautifulSubstrings("baeyh", 2)); // 2
console.log(beautifulSubstrings("abba", 1)); // 3
console.log(beautifulSubstrings("bcdf", 1)); // 0
console.log(beautifulSubstrings("a", 1)); // 0
console.log(beautifulSubstrings("ab", 1)); // 1
