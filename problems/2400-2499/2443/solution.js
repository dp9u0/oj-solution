/*
 * @lc app=leetcode id=2443 lang=javascript
 *
 * [2443] Sum of Number and Its Reverse
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    const reverse = (x) => {
        let r = 0;
        while (x > 0) { r = r * 10 + x % 10; x = Math.floor(x / 10); }
        return r;
    };
    for (let x = 0; x <= num; x++) {
        if (x + reverse(x) === num) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(sumOfNumberAndReverse(443)); // true (172+271)
console.log(sumOfNumberAndReverse(63));  // false
console.log(sumOfNumberAndReverse(181)); // true (140+041)
console.log(sumOfNumberAndReverse(0));   // true (0+0)
console.log(sumOfNumberAndReverse(10));  // false (5+5=10? yes!) actually 5+5=10, so true
console.log(sumOfNumberAndReverse(1));   // false
