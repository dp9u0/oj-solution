/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if (!nums || nums.length === 0) return [];
    
    // Sort the array ascending
    nums.sort((a, b) => a - b);
    
    let n = nums.length;
    let dp = new Array(n).fill(1); // dp[i] is length of subset ending with nums[i]
    let prev = new Array(n).fill(-1); // to reconstruct the subset
    
    let maxLen = 1;
    let maxIdx = 0;
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
        }
        
        // Track the maximum length and its ending index
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            maxIdx = i;
        }
    }
    
    // Reconstruct the subset
    let result = [];
    let curr = maxIdx;
    while (curr !== -1) {
        result.push(nums[curr]);
        curr = prev[curr];
    }
    
    return result.reverse();
};

module.exports = largestDivisibleSubset;

// TEST:
console.log(largestDivisibleSubset([1,2,3])); // [1, 2] or [1, 3]
console.log(largestDivisibleSubset([1,2,4,8])); // [1, 2, 4, 8]
