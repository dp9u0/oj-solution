/*
 * @lc app=leetcode id=1803 lang=javascript
 *
 * [1803] Count Pairs With XOR in a Range
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function(nums, low, high) {
    // 0-1 Trie node: [count, children[0], children[1]]
    const MAX_BIT = 14; // nums[i] <= 2*10^4 < 2^15
    let root = [0, null, null];

    const insert = (num) => {
        let node = root;
        node[0]++;
        for (let b = MAX_BIT; b >= 0; b--) {
            const bit = (num >> b) & 1;
            if (!node[bit + 1]) node[bit + 1] = [0, null, null];
            node = node[bit + 1];
            node[0]++;
        }
    };

    // Count pairs where nums[j] XOR num <= limit (j already inserted)
    const countLe = (num, limit) => {
        let node = root;
        let count = 0;
        for (let b = MAX_BIT; b >= 0 && node; b--) {
            const bit = (num >> b) & 1;
            const lbit = (limit >> b) & 1;
            if (lbit === 1) {
                // If limit bit is 1, we can take the branch where XOR bit is 0
                // (which means going to same bit direction)
                if (node[bit + 1]) count += node[bit + 1][0];
                // Then go to the branch where XOR bit is 1 (different direction)
                node = node[2 - bit]; // 1-bit gives the other child index
            } else {
                // limit bit is 0, XOR bit must be 0, go same direction
                node = node[bit + 1];
            }
        }
        if (node) count += node[0];
        return count;
    };

    let ans = 0;
    for (const num of nums) {
        ans += countLe(num, high) - countLe(num, low - 1);
        insert(num);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countPairs([1,4,2,7], 2, 6));          // 6
console.log(countPairs([9,8,4,2,1], 5, 14));       // 8
console.log(countPairs([1,2,3], 1, 3));             // 3
