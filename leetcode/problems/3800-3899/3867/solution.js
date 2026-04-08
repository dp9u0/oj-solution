/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    const n = nums.length;
    const prefixGcd = [];
    let mxi = 0;

    // Build prefixGcd array
    for (let i = 0; i < n; i++) {
        mxi = Math.max(mxi, nums[i]);
        prefixGcd.push(gcd(nums[i], mxi));
    }

    // Sort in non-decreasing order
    prefixGcd.sort((a, b) => a - b);

    // Form pairs and sum GCDs
    let sum = 0;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        sum += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }

    return sum;
};

// GCD helper function using Euclidean algorithm
const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

// TEST:
console.log(gcdSum([2, 6, 4])); // Expected: 2
console.log(gcdSum([3, 6, 2, 8])); // Expected: 5
console.log(gcdSum([1])); // Expected: 0 (single element, no pairs)
console.log(gcdSum([4, 4])); // Expected: 4
console.log(gcdSum([6, 9, 12, 15])); // Expected: varies
