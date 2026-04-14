/*
 * @lc app=leetcode id=2048 lang=javascript
 *
 * [2048] Next Greater Numerically Balanced Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    const candidates = [];
    const used = new Array(7).fill(false);

    const generate = (digits) => {
        if (digits.length > 0 && digits.length <= 7) {
            const sorted = [...digits].sort((a, b) => a - b);
            do {
                candidates.push(Number(sorted.join('')));
            } while (nextPermutation(sorted));
        }
        if (digits.length >= 7) return;
        for (let d = 1; d <= 6; d++) {
            if (used[d]) continue;
            if (digits.length + d > 7) continue;
            used[d] = true;
            const added = [];
            for (let i = 0; i < d; i++) {
                digits.push(d);
                added.push(d);
            }
            generate(digits);
            for (const _ of added) digits.pop();
            used[d] = false;
        }
    };

    generate([]);

    candidates.sort((a, b) => a - b);
    for (const c of candidates) {
        if (c > n) return c;
    }
    return 1224444;
};

function nextPermutation(arr) {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;
    if (i < 0) return false;
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let lo = i + 1, hi = arr.length - 1;
    while (lo < hi) {
        [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
        lo++; hi--;
    }
    return true;
}
// @lc code=end

// TEST:
console.log(nextBeautifulNumber(1)); // 22
console.log(nextBeautifulNumber(1000)); // 1333
console.log(nextBeautifulNumber(3000)); // 3133
