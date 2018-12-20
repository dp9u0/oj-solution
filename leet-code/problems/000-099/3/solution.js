/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let maxLength = 0,
        start = -1;
    for (var index = 0; index != s.length; index++) {
        let char = s.charAt(index);
        if (map[char] > start) {
            start = map[char];
        }
        map[char] = index;
        maxLength = Math.max(maxLength, index - start);
    }
    return maxLength;
};

// TEST:
console.log(lengthOfLongestSubstring("abcabcbb"));