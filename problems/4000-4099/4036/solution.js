/*
 * @lc app=leetcode id=4036 lang=javascript
 *
 * [4036] Lexicographically Largest String After Pair Transformations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var largestString = function(nums) {
    return nums.map((x) => {
        const chars = [];
        let remaining = x;
        while (remaining > 0) {
            // 字母上限为 'z'，即最多代表 2^25 个 'a'
            const exp = Math.min(25, 31 - Math.clz32(remaining));
            chars.push(String.fromCharCode(97 + exp));
            remaining -= 1 << exp;
        }
        return chars.join('');
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(largestString([2, 5, 7])));        // ["b","ca","cba"]
console.log(JSON.stringify(largestString([3, 9, 1])));        // ["ba","da","a"]
console.log(JSON.stringify(largestString([1])));              // ["a"]
console.log(JSON.stringify(largestString([4])));              // ["c"]
console.log(JSON.stringify(largestString([6])));              // ["cb"]
console.log(JSON.stringify(largestString([67108864])));       // ["zz"]  (2^26 = 2^25 + 2^25)
console.log(JSON.stringify(largestString([100000000])));      // ["zzyxwvusqponi"]
