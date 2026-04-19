/*
 * @lc app=leetcode id=2935 lang=javascript
 *
 * [2935] Maximum Strong Pair XOR II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const MAX_BIT = 19;
    const maxNodes = n * (MAX_BIT + 1) + 1;
    const ch = new Array(maxNodes * 2).fill(-1);
    const cnt = new Array(maxNodes).fill(0);
    let sz = 1;

    const insert = (val) => {
        let u = 0;
        cnt[u]++;
        for (let i = MAX_BIT; i >= 0; i--) {
            const bit = (val >> i) & 1;
            if (ch[2 * u + bit] === -1) ch[2 * u + bit] = sz++;
            u = ch[2 * u + bit];
            cnt[u]++;
        }
    };

    const remove = (val) => {
        let u = 0;
        cnt[u]--;
        for (let i = MAX_BIT; i >= 0; i--) {
            const bit = (val >> i) & 1;
            u = ch[2 * u + bit];
            cnt[u]--;
        }
    };

    const query = (val) => {
        let u = 0;
        if (cnt[u] === 0) return 0;
        let result = 0;
        for (let i = MAX_BIT; i >= 0; i--) {
            const bit = (val >> i) & 1;
            const want = 1 - bit;
            const v = ch[2 * u + want];
            if (v !== -1 && cnt[v] > 0) {
                result |= (1 << i);
                u = v;
            } else {
                u = ch[2 * u + bit];
            }
        }
        return result;
    };

    let ans = 0, left = 0;
    for (let j = 0; j < n; j++) {
        insert(nums[j]);
        while (nums[j] > 2 * nums[left]) {
            remove(nums[left]);
            left++;
        }
        ans = Math.max(ans, query(nums[j]));
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumStrongPairXor([1,2,3,4,5])); // 7
console.log(maximumStrongPairXor([10,100])); // 0
console.log(maximumStrongPairXor([500,520,2500,3000])); // 1020
console.log(maximumStrongPairXor([1,1])); // 0
console.log(maximumStrongPairXor([1,2,2])); // 3
