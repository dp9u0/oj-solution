/*
 * @lc app=leetcode id=3582 lang=javascript
 *
 * [3582] Generate Tag for Video Caption
 */

// @lc code=start
/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
    let words = caption.split(' ').filter(w => w.length > 0);
    if (words.length === 0) return '#';
    let tag = '#' + words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        let w = words[i].toLowerCase();
        tag += w.charAt(0).toUpperCase() + w.slice(1);
    }
    return tag.substring(0, 100);
};
// @lc code=end

// TEST:
console.log(generateTag("Leetcode daily streak achieved")); // #leetcodeDailyStreakAchieved
console.log(generateTag("can I Go There")); // #canIGoThere
