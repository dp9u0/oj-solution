/*
 * @lc app=leetcode id=2047 lang=javascript
 *
 * [2047] Number of Valid Words in a Sentence
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    const isValid = (token) => {
        let hyphenCount = 0;
        for (let i = 0; i < token.length; i++) {
            const c = token[i];
            if (c >= '0' && c <= '9') return false;
            if (c === '-') {
                hyphenCount++;
                if (hyphenCount > 1) return false;
                if (i === 0 || i === token.length - 1) return false;
                if (token[i - 1] < 'a' || token[i - 1] > 'z') return false;
                if (token[i + 1] < 'a' || token[i + 1] > 'z') return false;
            }
            if ((c === '!' || c === '.' || c === ',') && i !== token.length - 1) return false;
        }
        return true;
    };

    return sentence.split(/\s+/).filter(t => t.length > 0 && isValid(t)).length;
};
// @lc code=end

// TEST:
console.log(countValidWords("cat and  dog"));                            // 3
console.log(countValidWords("!this  1-s b8d!"));                         // 0
console.log(countValidWords("alice and  bob are playing stone-game10")); // 5
