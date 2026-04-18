/*
 * @lc app=leetcode id=3720 lang=javascript
 *
 * [3720] Lexicographically Smallest Permutation Greater Than Target
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const n = s.length;
    const freq = new Int32Array(26);
    for (const c of s) freq[c.charCodeAt(0) - 97]++;

    const result = [];
    let i = 0;

    // Try to match target prefix
    for (; i < n; i++) {
        const ti = target.charCodeAt(i) - 97;
        if (freq[ti] > 0) {
            freq[ti]--;
            result.push(ti);
        } else {
            // Find smallest char > target[i]
            let found = -1;
            for (let c = ti + 1; c < 26; c++) {
                if (freq[c] > 0) { found = c; break; }
            }
            if (found >= 0) {
                freq[found]--;
                result.push(found);
                for (let c = 0; c < 26; c++) while (freq[c]-- > 0) result.push(c);
                return result.map(c => String.fromCharCode(c + 97)).join('');
            }
            break;
        }
    }

    // Backtrack to find strictly greater permutation
    for (let j = result.length - 1; j >= 0; j--) {
        freq[result[j]]++;
        const ti = target.charCodeAt(j) - 97;
        let found = -1;
        for (let c = ti + 1; c < 26; c++) {
            if (freq[c] > 0) { found = c; break; }
        }
        if (found >= 0) {
            result.length = j;
            freq[found]--;
            result.push(found);
            for (let c = 0; c < 26; c++) while (freq[c]-- > 0) result.push(c);
            return result.map(c => String.fromCharCode(c + 97)).join('');
        }
    }

    return '';
};
// @lc code=end

// TEST:
console.log(lexGreaterPermutation('abc', 'bba')); // 'bca'
console.log(lexGreaterPermutation('leet', 'code')); // 'eelt'
console.log(lexGreaterPermutation('baba', 'bbaa')); // ''
console.log(lexGreaterPermutation('ab', 'ba')); // ''
console.log(lexGreaterPermutation('ba', 'ab')); // 'ba'
