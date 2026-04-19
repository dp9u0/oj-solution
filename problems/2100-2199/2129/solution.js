/*
 * @lc app=leetcode id=2129 lang=javascript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.split(' ').map(w =>
        w.length <= 2
            ? w.toLowerCase()
            : w[0].toUpperCase() + w.slice(1).toLowerCase()
    ).join(' ');
};
// @lc code=end

// TEST:
console.log(capitalizeTitle('capiTalIze tHe titLe')); // 'Capitalize The Title'
console.log(capitalizeTitle('First leTTeR of EACH Word')); // 'First Letter of Each Word'
console.log(capitalizeTitle('i lOve leetcode')); // 'i Love Leetcode'
console.log(capitalizeTitle('a')); // 'a'
console.log(capitalizeTitle('of')); // 'of'
console.log(capitalizeTitle('Hello')); // 'Hello'
