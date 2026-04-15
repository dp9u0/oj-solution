/*
 * @lc app=leetcode id=393 lang=javascript
 *
 * [393] UTF-8 Validation
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let i = 0;
    while (i < data.length) {
        let byte = data[i];
        let len = 0;
        if ((byte >> 7) === 0) len = 1;
        else if ((byte >> 5) === 0b110) len = 2;
        else if ((byte >> 4) === 0b1110) len = 3;
        else if ((byte >> 3) === 0b11110) len = 4;
        else return false;
        if (i + len > data.length) return false;
        for (let j = 1; j < len; j++) {
            if ((data[i + j] >> 6) !== 0b10) return false;
        }
        i += len;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(validUtf8([197,130,1])); // true
console.log(validUtf8([235,140,4])); // false
console.log(validUtf8([255])); // false
