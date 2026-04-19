/*
 * @lc app=leetcode id=2601 lang=javascript
 *
 * [2601] Prime Subtraction Operation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
    // sieve primes up to 1000
    let maxVal = 1000;
    let isPrime = new Array(maxVal + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= maxVal; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= maxVal; j += i) isPrime[j] = false;
        }
    }
    let primes = [];
    for (let i = 2; i <= maxVal; i++) {
        if (isPrime[i]) primes.push(i);
    }

    let n = nums.length;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) continue;
        // need p > nums[i] - nums[i+1] and p < nums[i]
        let diff = nums[i] - nums[i + 1];
        // find smallest prime > diff, and it must be < nums[i]
        let lo = 0, hi = primes.length - 1, idx = -1;
        while (lo <= hi) {
            let mid = (lo + hi) >> 1;
            if (primes[mid] > diff) { idx = mid; hi = mid - 1; }
            else lo = mid + 1;
        }
        if (idx === -1 || primes[idx] >= nums[i]) return false;
        nums[i] -= primes[idx];
    }
    return true;
};
// @lc code=end

// TEST:
console.log(primeSubOperation([4,9,6,10])); // true
console.log(primeSubOperation([6,8,11,12])); // true
console.log(primeSubOperation([5,8,3])); // false
console.log(primeSubOperation([2,2])); // false
