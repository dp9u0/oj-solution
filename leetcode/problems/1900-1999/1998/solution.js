/*
 * @lc app=leetcode id=1998 lang=javascript
 *
 * [1998] GCD Sort of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var gcdSort = function(nums) {
    const maxVal = Math.max(...nums);

    // Sieve: smallest prime factor for each number
    const spf = new Array(maxVal + 1);
    for (let i = 0; i <= maxVal; i++) spf[i] = i;
    for (let i = 2; i * i <= maxVal; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j <= maxVal; j += i) {
                if (spf[j] === j) spf[j] = i;
            }
        }
    }

    // Union-Find over numbers and primes
    const parent = new Int32Array(maxVal + 1);
    for (let i = 0; i <= maxVal; i++) parent[i] = i;

    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (a, b) => {
        const ra = find(a), rb = find(b);
        if (ra !== rb) parent[ra] = rb;
    };

    // Union each number with all its prime factors
    for (const num of nums) {
        let x = num;
        while (x > 1) {
            const p = spf[x];
            union(num, p);
            while (x % p === 0) x = x / p | 0;
        }
    }

    // Check: nums[i] and sorted[i] must be in the same component
    const sorted = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i] && find(nums[i]) !== find(sorted[i])) {
            return false;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(gcdSort([7, 21, 3]));           // true
console.log(gcdSort([5, 2, 6, 2]));          // false
console.log(gcdSort([10, 5, 9, 3, 15]));     // true
console.log(gcdSort([1]));                    // true (single element)
console.log(gcdSort([4, 2, 8]));             // true
