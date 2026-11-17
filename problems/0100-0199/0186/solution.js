/*
 * @lc app=leetcode.cn id=186 lang=javascript
 *
 * [186] 反转字符串中的单词 II
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    const reverse = (lo, hi) => {
        while (lo < hi) {
            const tmp = s[lo];
            s[lo++] = s[hi];
            s[hi--] = tmp;
        }
    };
    reverse(0, s.length - 1);
    let start = 0;
    for (let i = 0; i <= s.length; i++) {
        if (i === s.length || s[i] === ' ') {
            reverse(start, i - 1);
            start = i + 1;
        }
    }
};
// @lc code=end

// TEST:
const run = arr => {
    reverseWords(arr);
    return arr.join("");
};
console.log(run(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"])); // "blue is sky the"
console.log(run(["a"])); // "a"
console.log(run(["h","i"])); // "hi"
console.log(run(["a"," ","b"])); // "b a"
console.log(run(["o","n","e"," ","t","w","o"," ","t","h","r","e","e"])); // "three two one"
