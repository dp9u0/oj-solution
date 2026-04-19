/*
 * @lc app=leetcode id=3474 lang=javascript
 *
 * [3474] Lexicographically Smallest Generated String
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var generateString = function(str1, str2) {
    const n = str1.length;
    const m = str2.length;
    const len = n + m - 1;

    // Set characters from T positions, check conflicts
    const word = new Array(len).fill(null);
    for (let i = 0; i < n; i++) {
        if (str1[i] === 'T') {
            for (let j = 0; j < m; j++) {
                const p = i + j;
                if (word[p] !== null && word[p] !== str2[j]) return "";
                word[p] = str2[j];
            }
        }
    }

    // Compute locked array
    const lockedDiff = new Int32Array(len + 1);
    for (let i = 0; i < n; i++) {
        if (str1[i] === 'T') {
            lockedDiff[i]++;
            lockedDiff[i + m]--;
        }
    }
    const locked = new Uint8Array(len);
    let cnt = 0;
    for (let i = 0; i < len; i++) {
        cnt += lockedDiff[i];
        locked[i] = cnt > 0 ? 1 : 0;
    }

    // Fill remaining with 'a'
    for (let i = 0; i < len; i++) {
        if (word[i] === null) word[i] = 'a';
    }

    // Process F positions left to right
    for (let i = 0; i < n; i++) {
        if (str1[i] === 'F') {
            let matches = true;
            for (let j = 0; j < m; j++) {
                if (word[i + j] !== str2[j]) { matches = false; break; }
            }
            if (matches) {
                let bumped = false;
                for (let j = m - 1; j >= 0; j--) {
                    if (!locked[i + j]) {
                        word[i + j] = String.fromCharCode(str2.charCodeAt(j) + 1);
                        bumped = true;
                        break;
                    }
                }
                if (!bumped) return "";
            }
        }
    }

    return word.join('');
};
// @lc code=end

// TEST:
console.log(generateString("TFTF", "ab")); // "ababa"
console.log(generateString("TFTF", "abc")); // ""
console.log(generateString("F", "d")); // "a"
console.log(generateString("T", "a")); // "a"
console.log(generateString("FF", "a")); // "bb"
