/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    const n = s.length;
    for (let i = 0; i < n; i++) {
        const j = n - i - 1;
        if (s[i] === s[j]) {
            return i;
        }
    }
    return -1;
};

// TEST:
console.log(firstMatchingIndex("abcacbd")); // Expected: 1
console.log(firstMatchingIndex("abc")); // Expected: 1
console.log(firstMatchingIndex("abcdab")); // Expected: -1
console.log(firstMatchingIndex("a")); // Expected: 0
console.log(firstMatchingIndex("ab")); // Expected: -1
console.log(firstMatchingIndex("aa")); // Expected: 0
