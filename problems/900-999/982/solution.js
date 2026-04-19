/*
 * @lc app=leetcode id=982 lang=javascript
 *
 * [982] Triples with Bitwise AND Equal To Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
    const MAX = 1 << 16;
    const cnt = new Int32Array(MAX);
    for (const a of nums) {
        for (const b of nums) {
            cnt[a & b]++;
        }
    }

    let ans = 0;
    for (const c of nums) {
        // Enumerate all x where x & c == 0
        // x must have 1 only in bits where c has 0
        // Enumerate submasks of ~c (within 16 bits)
        let mask = (~c) & (MAX - 1);
        let sub = mask;
        while (true) {
            ans += cnt[sub];
            if (sub === 0) break;
            sub = (sub - 1) & mask;
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countTriplets([2, 1, 3])); // 12
console.log(countTriplets([0, 0, 0])); // 27
console.log(countTriplets([1])); // 0
console.log(countTriplets([2])); // 0
console.log(countTriplets([0, 1])); // 7
