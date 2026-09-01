/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }
    let store = { startIndex: 0, maxLength: 1 };
    for (let i = 0; i < s.length - 1; i++) {
        palindrome(s, i, i, store);
        palindrome(s, i, i + 1, store);
    }
    return s.substring(store.startIndex, store.startIndex + store.maxLength);
};

/**
 * @param {string} s
 * @param {number} leftIndex
 * @param {number} rightIndex
 * @param {object} store 
 */
var palindrome = function(s, leftIndex, rightIndex, store) {
    let leftChar = s.charAt(leftIndex),
        rightChar = s.charAt(rightIndex);
    while (leftChar && rightChar && leftChar === rightChar) {
        leftChar = s.charAt(--leftIndex);
        rightChar = s.charAt(++rightIndex);
    }
    let maxLength = rightIndex - leftIndex - 1;
    if (store.maxLength < maxLength) {
        store.maxLength = maxLength;
        store.startIndex = leftIndex + 1;
    }
};

// TEST:
console.log(longestPalindrome('asfsdf'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bb'));