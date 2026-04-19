/*
 * @lc app=leetcode id=3734 lang=javascript
 *
 * [3734] Lexicographically Smallest Palindromic Permutation Greater Than Target
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function(s, target) {
    const n = s.length;
    const m = n >> 1;
    const isOdd = n & 1;

    const cnt = new Array(26).fill(0);
    for (const c of s) cnt[c.charCodeAt(0) - 97]++;

    let oddChar = -1;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] & 1) {
            if (oddChar >= 0) return '';
            oddChar = i;
        }
    }
    if (!!isOdd !== (oddChar >= 0)) return '';

    const half = cnt.map(c => c >> 1);

    const build = (h) => {
        let res = h.map(c => String.fromCharCode(c + 97)).join('');
        if (isOdd) res += String.fromCharCode(oddChar + 97);
        for (let i = m - 1; i >= 0; i--) res += String.fromCharCode(h[i] + 97);
        return res;
    };

    const fillSmallest = (h, start) => {
        for (let i = start; i < m; i++) {
            for (let c = 0; c < 26; c++) {
                if (half[c] > 0) {
                    h[i] = c;
                    half[c]--;
                    break;
                }
            }
        }
    };

    const h = new Array(m);
    let i = 0;
    for (; i < m; i++) {
        const ti = target.charCodeAt(i) - 97;
        if (half[ti] > 0) {
            h[i] = ti;
            half[ti]--;
        } else {
            let found = false;
            for (let c = ti + 1; c < 26; c++) {
                if (half[c] > 0) {
                    h[i] = c;
                    half[c]--;
                    fillSmallest(h, i + 1);
                    found = true;
                    break;
                }
            }
            if (found) return build(h);
            for (let j = i - 1; j >= 0; j--) {
                half[h[j]]++;
                found = false;
                for (let c = h[j] + 1; c < 26; c++) {
                    if (half[c] > 0) {
                        h[j] = c;
                        half[c]--;
                        fillSmallest(h, j + 1);
                        found = true;
                        break;
                    }
                }
                if (found) return build(h);
            }
            return '';
        }
    }

    const p = build(h);
    if (p > target) return p;

    for (let j = m - 1; j >= 0; j--) {
        half[h[j]]++;
        let found = false;
        for (let c = h[j] + 1; c < 26; c++) {
            if (half[c] > 0) {
                h[j] = c;
                half[c]--;
                fillSmallest(h, j + 1);
                found = true;
                break;
            }
        }
        if (found) return build(h);
    }
    return '';
};
// @lc code=end

// TEST:
console.log(lexPalindromicPermutation('baba', 'abba') === 'baab');
console.log(lexPalindromicPermutation('baba', 'bbaa') === '');
console.log(lexPalindromicPermutation('abc', 'abb') === '');
console.log(lexPalindromicPermutation('aac', 'abb') === 'aca');
console.log(lexPalindromicPermutation('aa', 'aa') === '');
console.log(lexPalindromicPermutation('zz', 'aa') === 'zz');
console.log(lexPalindromicPermutation('aabbcc', 'abcabc') === 'abccba');
