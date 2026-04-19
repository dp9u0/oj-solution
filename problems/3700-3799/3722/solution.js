/*
 * @lc app=leetcode id=3722 lang=javascript
 *
 * [3722] Lexicographically Smallest String After Reverse
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var lexSmallest = function(s) {
    const n = s.length;
    let result = s;
    for (let k = 1; k <= n; k++) {
        // reverse first k
        const t1 = s.slice(0, k).split('').reverse().join('') + s.slice(k);
        if (t1 < result) result = t1;
        // reverse last k
        const t2 = s.slice(0, n - k) + s.slice(n - k).split('').reverse().join('');
        if (t2 < result) result = t2;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(lexSmallest('dcab')); // acdb
console.log(lexSmallest('abba')); // aabb
console.log(lexSmallest('zxy')); // xzy
