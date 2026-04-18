/*
 * @lc app=leetcode id=2818 lang=javascript
 *
 * [2818] Apply Operations to Maximize Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    const MOD = BigInt(1e9 + 7);
    const n = nums.length;

    // Sieve: count distinct prime factors
    const maxVal = Math.max(...nums);
    const primeScore = new Array(maxVal + 1).fill(0);
    for (let i = 2; i <= maxVal; i++) {
        if (primeScore[i] === 0) {
            for (let j = i; j <= maxVal; j += i) {
                primeScore[j]++;
            }
        }
    }

    const scores = nums.map(x => primeScore[x]);

    // Monotonic stack: left[i] = nearest j < i with scores[j] >= scores[i]
    const left = new Array(n).fill(-1);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && scores[stack[stack.length - 1]] < scores[i]) {
            stack.pop();
        }
        left[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Monotonic stack: right[i] = nearest j > i with scores[j] > scores[i]
    const right = new Array(n).fill(n);
    stack.length = 0;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && scores[stack[stack.length - 1]] <= scores[i]) {
            stack.pop();
        }
        right[i] = stack.length > 0 ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    // Compute count for each element and sort by value descending
    const elements = nums.map((val, i) => ({
        val,
        cnt: BigInt(i - left[i]) * BigInt(right[i] - i)
    }));
    elements.sort((a, b) => b.val - a.val);

    // Greedy: use largest values first
    let result = 1n;
    let remain = BigInt(k);
    for (const { val, cnt } of elements) {
        if (remain <= 0n) break;
        const use = cnt < remain ? cnt : remain;
        result = result * powMod(BigInt(val), use, MOD) % MOD;
        remain -= use;
    }

    return Number(result);
};

function powMod(base, exp, mod) {
    let result = 1n;
    base %= mod;
    while (exp > 0n) {
        if (exp & 1n) result = result * base % mod;
        base = base * base % mod;
        exp >>= 1n;
    }
    return result;
}
// @lc code=end

// TEST:
console.log(maximumScore([8, 3, 9, 3, 8], 2)); // 81
console.log(maximumScore([19, 12, 14, 6, 10, 18], 3)); // 4788
console.log(maximumScore([1], 1)); // 1
console.log(maximumScore([2, 3, 5], 3)); // 45
console.log(maximumScore([1, 1, 1], 3)); // 1
