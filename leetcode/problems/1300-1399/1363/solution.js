/*
 * @lc app=leetcode id=1363 lang=javascript
 *
 * [1363] Largest Multiple of Three
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    const count = new Array(10).fill(0);
    let sum = 0;
    for (const d of digits) {
        count[d]++;
        sum += d;
    }

    const removeOne = (rem) => {
        for (let d = rem; d <= 9; d += 3) {
            if (count[d] > 0) {
                count[d]--;
                return true;
            }
        }
        return false;
    };

    const removeTwo = (rem) => {
        let removed = 0;
        for (let d = rem; d <= 9 && removed < 2; d += 3) {
            while (count[d] > 0 && removed < 2) {
                count[d]--;
                removed++;
            }
        }
        return removed === 2;
    };

    if (sum % 3 === 1) {
        if (!removeOne(1)) removeTwo(2);
    } else if (sum % 3 === 2) {
        if (!removeOne(2)) removeTwo(1);
    }

    let result = '';
    for (let d = 9; d >= 0; d--) {
        result += String(d).repeat(count[d]);
    }
    if (result.length === 0) return '';
    if (result[0] === '0') return '0';
    return result;
};
// @lc code=end

// TEST:
console.log(largestMultipleOfThree([8,1,9])); // "981"
console.log(largestMultipleOfThree([8,6,7,1,0])); // "8760"
console.log(largestMultipleOfThree([1])); // ""
console.log(largestMultipleOfThree([0,0,0])); // "0"
