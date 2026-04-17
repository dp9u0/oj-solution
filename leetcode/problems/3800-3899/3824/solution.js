/*
 * @lc app=leetcode id=3824 lang=javascript
 *
 * [3824] Minimum K to Reduce Array Within Limit
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumK = function(nums) {
    const check = (k) => {
        let ops = 0;
        const k2 = BigInt(k) * BigInt(k);
        for (const x of nums) {
            ops += Math.ceil(x / k);
            if (ops > k2) return false;
        }
        return true;
    };

    let lo = 1, hi = Math.max(Math.max(...nums), Math.ceil(Math.sqrt(nums.length)) + 1);
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimumK([3,7,5])); // 3
console.log(minimumK([1])); // 1
console.log(minimumK([1,1,1])); // 1 (k=1: ops=3, 1^2=1, nope. k=2: ops=3, 4>=3, yes)
console.log(minimumK([10])); // 4 (k=3: ceil(10/3)=4, 3^2=9>=4 yes. k=2: ceil(10/2)=5, 4<5 no)
console.log(minimumK([100])); // 10 (k=10: ceil(100/10)=10, 100>=10 yes)
console.log(minimumK([5,5,5,5,5])); // 5
