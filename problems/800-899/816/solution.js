/*
 * @lc app=leetcode id=816 lang=javascript
 *
 * [816] Ambiguous Coordinates
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
    const digits = s.slice(1, -1);
    const n = digits.length;
    const ans = [];

    const generate = (str) => {
        const res = [];
        const len = str.length;
        if (len === 1 || str[0] !== '0') res.push(str);
        for (let i = 1; i < len; i++) {
            if (i > 1 && str[0] === '0') continue;
            if (str[len - 1] === '0') continue;
            res.push(str.slice(0, i) + '.' + str.slice(i));
        }
        return res;
    };

    for (let i = 1; i < n; i++) {
        const left = generate(digits.slice(0, i));
        const right = generate(digits.slice(i));
        for (const l of left) {
            for (const r of right) {
                ans.push(`(${l}, ${r})`);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(ambiguousCoordinates("(123)"));
console.log(ambiguousCoordinates("(0123)"));
console.log(ambiguousCoordinates("(00011)"));
